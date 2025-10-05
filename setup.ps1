# This script sets up both Python venv and Node.js environment
Write-Host "Setting up development environment..." -ForegroundColor Green

# 1. Activate Python virtual environment
if (Test-Path ".venv") {
    Write-Host "Activating Python virtual environment..." -ForegroundColor Yellow
    .\.venv\Scripts\Activate.ps1
    pip install -r requirements.txt
} else {
    Write-Host "Creating Python virtual environment..." -ForegroundColor Yellow
    python -m venv .venv
    .\.venv\Scripts\Activate.ps1
    pip install -r requirements.txt
}

# 2. Install Node.js dependencies
Write-Host "Installing Node.js dependencies..." -ForegroundColor Yellow
npm install

# 3. Run development server
Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "Access your site at http://localhost:3000" -ForegroundColor Cyan
npm run dev