from flask import Flask, request, render_template, jsonify, send_file
import pandas as pd
import json
import os
from werkzeug.utils import secure_filename
import logging
import uuid

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Setup logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Ensure upload folder exists with proper permissions
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
    os.chmod(UPLOAD_FOLDER, 0o755)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        if 'file' not in request.files:
            logger.error("No file part in request")
            return jsonify({'error': 'No file part in request. Ensure the file input name is "file".'}), 400
        
        file = request.files['file']
        if file.filename == '':
            logger.error("No file selected")
            return jsonify({'error': 'No file selected. Please choose an Excel file.'}), 400
        
        if file and file.filename.lower().endswith(('.xlsx', '.xls')):
            # Generate a unique filename to avoid conflicts
            filename = f"{uuid.uuid4()}_{secure_filename(file.filename)}"
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            
            # Save file
            try:
                file.save(file_path)
                logger.info(f"File saved to {file_path}")
            except Exception as e:
                logger.error(f"Error saving file: {str(e)}")
                return jsonify({'error': f'Error saving file: {str(e)}'}), 500
            
            # Read Excel file
            try:
                xl = pd.ExcelFile(file_path)
                sheets = xl.sheet_names
                sheet_data = {}
                
                for sheet in sheets:
                    try:
                        # Read Excel sheet, skipping first 3 rows and using row 4 as header
                        df = pd.read_excel(file_path, sheet_name=sheet, skiprows=3, header=0)
                        
                        # Get subheader row (row 5) and combine with headers
                        subheader_df = pd.read_excel(file_path, sheet_name=sheet, skiprows=4, nrows=1, header=None)
                        combined_headers = []
                        for i in range(len(df.columns)):
                            if i < len(subheader_df.iloc[0]):
                                combined_headers.append(f"{df.columns[i]} - {subheader_df.iloc[0][i]}")
                            else:
                                combined_headers.append(df.columns[i])
                        df.columns = combined_headers
                        
                        # Handle NaN values for JSON compatibility
                        df = df.where(pd.notnull(df), None)
                        sheet_data[sheet] = df.to_dict(orient='records')
                    except Exception as e:
                        logger.warning(f"Error reading sheet {sheet}: {str(e)}")
                        sheet_data[sheet] = []
                
                logger.info(f"Processed sheets: {sheets}")
                return jsonify({
                    'sheets': sheets,
                    'data': sheet_data,
                    'file_path': file_path
                })
            except Exception as e:
                logger.error(f"Error reading Excel file: {str(e)}")
                os.remove(file_path) if os.path.exists(file_path) else None
                return jsonify({'error': f'Error reading Excel file: {str(e)}'}), 500
        else:
            logger.error("Invalid file format")
            return jsonify({'error': 'Invalid file format. Please upload an .xlsx or .xls file.'}), 400
    
    except Exception as e:
        logger.error(f"Unexpected error in upload_file: {str(e)}")
        return jsonify({'error': f'Unexpected error: {str(e)}'}), 500

@app.route('/convert', methods=['POST'])
def convert_to_json():
    try:
        data = request.get_json()
        selected_sheets = data.get('sheets', [])
        file_path = data.get('file_path')
        
        if not file_path:
            logger.error("No file path provided")
            return jsonify({'error': 'No file path provided. Please upload the file again.'}), 400
        
        if not os.path.exists(file_path):
            logger.error(f"File not found: {file_path}")
            return jsonify({'error': f'File not found: {file_path}. Please upload the file again.'}), 400
        
        if not selected_sheets:
            logger.error("No sheets selected")
            return jsonify({'error': 'No sheets selected. Please select at least one sheet.'}), 400
        
        result = {}
        try:
            xl = pd.ExcelFile(file_path)
            for sheet in selected_sheets:
                if sheet in xl.sheet_names:
                    try:
                        # Read Excel sheet, skipping first 3 rows and using row 4 as header
                        df = pd.read_excel(file_path, sheet_name=sheet, skiprows=3, header=0)
                        
                        # Get subheader row (row 5) and combine with headers
                        subheader_df = pd.read_excel(file_path, sheet_name=sheet, skiprows=4, nrows=1, header=None)
                        combined_headers = []
                        for i in range(len(df.columns)):
                            if i < len(subheader_df.iloc[0]):
                                combined_headers.append(f"{df.columns[i]} - {subheader_df.iloc[0][i]}")
                            else:
                                combined_headers.append(df.columns[i])
                        df.columns = combined_headers
                        
                        # Handle NaN values and ensure JSON-serializable
                        df = df.where(pd.notnull(df), None)
                        # Convert non-serializable types (e.g., datetime) to string
                        df = df.applymap(lambda x: str(x) if isinstance(x, (pd.Timestamp, pd.Timedelta)) else x)
                        result[sheet] = df.to_dict(orient='records')
                    except Exception as e:
                        logger.warning(f"Error processing sheet {sheet}: {str(e)}")
                        result[sheet] = []
                else:
                    logger.warning(f"Sheet {sheet} not found in Excel file")
                    result[sheet] = []
        except Exception as e:
            logger.error(f"Error reading Excel file during conversion: {str(e)}")
            return jsonify({'error': f'Error reading Excel file: {str(e)}. Please try uploading a different file.'}), 500
        
        # Create JSON file
        output_filename = f"output_{uuid.uuid4()}.json"
        output_path = os.path.join(app.config['UPLOAD_FOLDER'], output_filename)
        try:
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(result, f, indent=4, ensure_ascii=False)
            logger.info(f"JSON file created at {output_path}")
        except Exception as e:
            logger.error(f"Error creating JSON file: {str(e)}")
            return jsonify({'error': f'Error creating JSON file: {str(e)}. Please try again.'}), 500
        finally:
            # Clean up Excel file after JSON creation
            try:
                os.remove(file_path) if os.path.exists(file_path) else None
                logger.info(f"Cleaned up uploaded file: {file_path}")
            except Exception as e:
                logger.warning(f"Error cleaning up file {file_path}: {str(e)}")
        
        # Read JSON content for display
        try:
            with open(output_path, 'r', encoding='utf-8') as f:
                json_content = f.read()
        except Exception as e:
            logger.error(f"Error reading JSON file for display: {str(e)}")
            json_content = "{}"
        
        return jsonify({
            'download_path': f'/download/{output_filename}',
            'json_content': json_content,
            'message': 'Converted successfully'
        })
    except Exception as e:
        logger.error(f"Unexpected error in convert_to_json: {str(e)}")
        return jsonify({'error': f'Unexpected error: {str(e)}. Please try uploading the file again.'}), 500

@app.route('/download/<filename>')
def download_file(filename):
    try:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        if os.path.exists(file_path):
            logger.info(f"Downloading file: {file_path}")
            response = send_file(file_path, as_attachment=True, download_name='converted_data.json')
            # Clean up JSON file after download
            try:
                os.remove(file_path)
                logger.info(f"Cleaned up JSON file: {file_path}")
            except Exception as e:
                logger.warning(f"Error cleaning up JSON file {file_path}: {str(e)}")
            return response
        logger.error(f"Download file not found: {file_path}")
        return jsonify({'error': 'File not found. Please try converting again.'}), 404
    except Exception as e:
        logger.error(f"Error downloading file: {str(e)}")
        return jsonify({'error': f'Error downloading file: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)