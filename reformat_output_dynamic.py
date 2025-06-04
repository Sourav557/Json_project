import json

# Read the input JSON file
with open('replaced_keys_output.json', 'r') as f:
    input_data = json.load(f)

# Collect all unique fiscal years from the input data
fiscal_years = set()
for key, values in input_data.items():
    fiscal_years.update(values.keys())

# Sort fiscal years (optional, for consistent order; assumes chronological naming)
fiscal_years = sorted(fiscal_years)

# Create a mapping of fiscal years to indices (0, 1, 2, ...)
fiscal_year_map = {fy: str(i) for i, fy in enumerate(fiscal_years)}

# Create fiscal year values for the FISCAL_YEAR key (use input fiscal years as-is)
fiscal_year_values = {str(i): fy.replace(" - Audited", "").replace(" - Audited/Provisional", "").replace(" - Projected", "") 
                      for i, fy in enumerate(fiscal_years)}

# Initialize the output dictionary
output_data = {
    "FISCAL_YEAR": fiscal_year_values,
    "FY": len(fiscal_years),  # Number of fiscal years
    "FINANCIAL_TYPE": {str(i): "Management Prepared" for i in range(len(fiscal_years))}
}

# Process each key in the input data
for key, values in input_data.items():
    # Skip keys that don't need reformatting
    if key in ["Cash Flow Analysis", "Ratio Analysis", "Prepared by", 
               "Name", "Designation", "Signature", 
               "Only for presentation in Credit Memorandum ( please do not print it)",
               "Financial Risk Assessment", "Note: Formulas in Worksheet are password protected"]:
        continue
    
    # Initialize the new key's data
    new_values = {}
    
    # Map the fiscal years to the new indices
    for fiscal_year, value in values.items():
        if fiscal_year in fiscal_year_map:
            index = fiscal_year_map[fiscal_year]
            # Convert value to string, handle null as empty string
            if value is None:
                new_values[index] = ""
            elif isinstance(value, (int, float)):
                new_values[index] = str(value)
            else:
                new_values[index] = str(value)
    
    # Add the reformatted data to the output
    output_data[key] = new_values

# Save the reformatted data to a new JSON file
with open('reformatted_output.json', 'w') as f:
    json.dump(output_data, f, indent=2)

print("Reformatted data saved to 'reformatted_output.json'.")