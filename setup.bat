@echo off
echo Setting up development environment...

REM 1. Activate Python virtual environment
if exist ".venv" (
    echo Activating Python virtual environment...
    call .venv\Scripts\activate.bat
    pip install -r requirements.txt
) else (
    echo Creating Python virtual environment...
    python -m venv .venv
    call .venv\Scripts\activate.bat
    pip install -r requirements.txt
)

REM 2. Install Node.js dependencies
echo Installing Node.js dependencies...
call npm install

REM 3. Run development server
echo Starting development server...
echo Access your site at http://localhost:3000
call npm run dev