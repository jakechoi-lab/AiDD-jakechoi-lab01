# Form Validation Testing Guide

## How to Test the Form Validation

1. **Open the Contact Page**
   - Navigate to `contact.html` in your browser
   - Or double-click the file to open it

2. **Test Required Fields**
   - Try submitting the form without filling any fields
   - You should see red error messages appear under each required field

3. **Test Email Validation**
   - Enter invalid emails like "test", "test@", "test@domain"
   - You should see "Please enter a valid email address"

4. **Test Password Requirements**
   - Enter passwords shorter than 8 characters
   - You should see "Password must be at least 8 characters"

5. **Test Password Match**
   - Enter different passwords in the two password fields
   - You should see "Passwords do not match" under confirm password

6. **Test Real-Time Validation**
   - Start typing in any field and then delete the content
   - Error messages should appear as you type/leave fields

7. **Test Successful Submission**
   - Fill all required fields correctly
   - Use a valid email format
   - Use matching passwords ≥ 8 characters
   - The form should redirect to `thankyou.html`

## Validation Rules Implemented

- ✅ **First Name**: Required field
- ✅ **Last Name**: Required field  
- ✅ **Email**: Required + valid email format
- ✅ **Password**: Required + minimum 8 characters
- ✅ **Confirm Password**: Required + must match password
- ✅ **Subject**: Required field
- ✅ **Message**: Required field

## Features

- **Real-time validation**: Errors show as you type
- **Visual feedback**: Red borders and error messages for invalid fields
- **Success redirect**: Automatically goes to thank you page when valid
- **Accessible**: Error messages are properly linked to form fields

## Files Added/Modified

- `script.js` - New validation script
- `contact.html` - Added form ID and CSS classes
- `styles.css` - Added error message and validation styles