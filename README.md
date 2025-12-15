# Registration Form Assignment

A simple, modern registration form with live validation built using vanilla JavaScript and DOM manipulation methods.

## Features

- **Live Validation**: Real-time feedback as users type
- **Dynamic Submit Button**: Disabled until all fields are valid
- **Clean UI**: Modern gradient design with smooth animations
- **DOM Methods**: Uses createElement, appendChild, textContent, classList

## Form Fields

1. First Name (min 5 characters)
2. Last Name
3. Surname/Family Name
4. Email (must contain "@")
5. Password (min 8 chars, 1 uppercase)
6. Confirm Password (must match)
7. Gender (radio buttons)
8. Country (dropdown)
9. Terms & Conditions (checkbox)

## Validation Rules

✓ First Name: At least 5 characters  
✓ Email: Must contain "@"  
✓ Password: 8+ characters with one uppercase letter  
✓ Confirm Password: Must match password  
✓ Gender: One option must be selected  
✓ Country: Must select from dropdown  
✓ Terms: Must be checked  

## How It Works

1. Error messages appear below each field using DOM methods
2. Submit button stays disabled until all validations pass
3. On submit, form prevents default and shows a summary
4. Summary displays: Name, Email, Country, Gender

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (no frameworks)
- DOM Manipulation

## Usage
https://github.com/TaimoorQayyum/Registration-Form

---

**Created for Web Development Assignment**
