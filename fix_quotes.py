#!/usr/bin/env python3
import re

# Read the file
with open('app/content/blog/how-to-create-monthly-budget-2026.mdx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all Unicode quote variants with ASCII equivalents
replacements = {
    '\u2018': "'",  # Left single quotation mark
    '\u2019': "'",  # Right single quotation mark  
    '\u201B': "'",  # Single high-reversed-9 quotation mark
    '\u201A': "'",  # Single low-9 quotation mark
    '\u201C': '"',  # Left double quotation mark
    '\u201D': '"',  # Right double quotation mark
    '\u201F': '"',  # Double high-reversed-9 quotation mark
    '\u201E': '"',  # Double low-9 quotation mark
}

for old, new in replacements.items():
    content = content.replace(old, new)

# Write back
with open('app/content/blog/how-to-create-monthly-budget-2026.mdx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Completed comprehensive quote replacement')

