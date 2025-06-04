import json
import re
import difflib

def normalize_key(key, strict=True):
    """Normalize key for matching, with strict or lenient options."""
    # Remove extra spaces
    key = ' '.join(key.split())
    if strict:
        # Strict: preserve most characters, only remove parentheses content
        key = re.sub(r'\s*\([^)]+\)\s*', ' ', key)
        key = ' '.join(key.split())
    else:
        # Lenient: remove parentheses, slashes, equal signs, apostrophes
        key = re.sub(r'\s*\([^)]+\)\s*', ' ', key)
        key = key.replace('/', ' ').replace('=', ' ').replace("'", ' ')
        key = ' '.join(key.split())
    return key.strip()

def fuzzy_match(key1, key2):
    """Check if two keys are similar using difflib, accounting for typos."""
    return difflib.SequenceMatcher(None, key1.lower(), key2.lower()).ratio() > 0.9

# Read the input JSON files
with open('transformed_output.json', 'r') as f:
    transformed_data = json.load(f)

with open('output.json', 'r') as f:
    key_map = json.load(f)

# Explicit mappings for edge cases
explicit_mappings = {
    "A/C HEAD": "FISCAL_YEAR",
    "Provison for tax": "PRFOTA",
    "Adminstration expenses": "ADMEXP",
    "Depriciation": "DEPREC",
    "Directors'/Partners'/Proprietor's loans": "DIRPARPROLOA",
    "Increase in sales": "FRAIIS",
    "Withdrawals - dividend / others": "WITDIVOTH"
}

# Create a new dictionary to store the modified data
modified_data = {}

# Normalize key_map keys for comparison
strict_key_map = {normalize_key(k, strict=True): k for k in key_map.keys()}
lenient_key_map = {normalize_key(k, strict=False): k for k in key_map.keys()}

# Loop through the keys in transformed_data
for old_key in transformed_data:
    new_key = old_key  # Default to old key if no match found

    # Check explicit mappings first
    if old_key in explicit_mappings:
        new_key = explicit_mappings[old_key]
    else:
        # Try strict normalization
        normalized_old_key = normalize_key(old_key, strict=True)
        if normalized_old_key in strict_key_map:
            original_key = strict_key_map[normalized_old_key]
            new_key = key_map[original_key]
        else:
            # Try lenient normalization
            normalized_old_key = normalize_key(old_key, strict=False)
            if normalized_old_key in lenient_key_map:
                original_key = lenient_key_map[normalized_old_key]
                new_key = key_map[original_key]
            else:
                # Try fuzzy matching for typos
                for map_key, map_value in key_map.items():
                    if fuzzy_match(old_key, map_key):
                        new_key = map_value
                        break
                    # Try matching after minimal cleaning
                    cleaned_old_key = old_key.replace('=', ' ').replace('/', ' ').replace("'", ' ')
                    cleaned_map_key = map_key.replace('=', ' ').replace('/', ' ').replace("'", ' ')
                    if normalize_key(cleaned_old_key, strict=False) == normalize_key(cleaned_map_key, strict=False):
                        new_key = map_value
                        break

    # Assign the data to the new key
    modified_data[new_key] = transformed_data[old_key]

# Save the modified data to a new JSON file
with open('replaced_keys_output.json', 'w') as f:
    json.dump(modified_data, f, indent=4)

print("Modified data saved to 'replaced_keys_output.json'.")