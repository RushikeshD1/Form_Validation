# Sign Up Form

## Overview

This project implements a simple sign-up form using React, Formik and Yup. The form includes validation for name,email password and confirm password fields, ensuring user input is correct before submission.

## Features

- **Name Validation**: The name field requires a minimum of 2 characters and a maximum of 12 characters.
- **Email Validation**: The email field requires a valid email format.
- **Password Validation**: The password field requires a minimum of 4 characters/numbers and a maximum of 15 characters/numbers.
- **Confirm Password Validation**: The confirm password field must match the password field to validate.
- **Submit Button State**: The submit button is initially disabled and enables only when valid input is provided in all fields.
- **Error Messages**: Displays error messages directly within input fields to guide users.