# Login Page MVP

## Overview
This project is a simple login page built with FastAPI for the backend and HTML/JavaScript for the frontend.

## Setup Instructions
1. Install Python 3.8+ and pip.
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install required packages:
   ```bash
   pip install fastapi uvicorn passlib[bcrypt] python-jose
   ```
4. Run the backend:
   ```bash
   uvicorn backend.main:app --reload
   ```
5. Open `frontend/index.html` in a web browser to access the login page.

## Usage
- Enter your email and password to log in.
- Successful login redirects to the welcome page.
- Invalid credentials display an error message.