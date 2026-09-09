# Image Download Script for Khalil Ahmad AC Repair Website
# Downloads free images from Unsplash (free to use, no attribution required)

$imagesDir = "C:\Users\Khalil Ahmad\OneDrive\Desktop\DemoProjects\AC Reparing\ac-repair-website\public\images"

# Create images directory if it doesn't exist
if (!(Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Force -Path $imagesDir | Out-Null
}

Write-Host "Downloading images from Unsplash..." -ForegroundColor Cyan

# Hero Image - Technician working on AC
Write-Host "Downloading hero image..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop" -OutFile "$imagesDir\hero-technician.jpg" -ErrorAction SilentlyContinue

# AC Repair Image
Write-Host "Downloading AC repair image..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop" -OutFile "$imagesDir\ac-repair.jpg" -ErrorAction SilentlyContinue

# Refrigerator Image
Write-Host "Downloading refrigerator image..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&h=600&fit=crop" -OutFile "$imagesDir\refrigerator.jpg" -ErrorAction SilentlyContinue

# Washing Machine Image
Write-Host "Downloading washing machine image..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&h=600&fit=crop" -OutFile "$imagesDir\washing-machine.jpg" -ErrorAction SilentlyContinue

# Microwave Image
Write-Host "Downloading microwave image..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&h=600&fit=crop" -OutFile "$imagesDir\microwave.jpg" -ErrorAction SilentlyContinue

# About Section - Professional Team
Write-Host "Downloading team image..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop" -OutFile "$imagesDir\team.jpg" -ErrorAction SilentlyContinue

# Featured AC Section
Write-Host "Downloading featured AC image..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1631545806609-3c480b4c2986?w=800&h=600&fit=crop" -OutFile "$imagesDir\featured-ac.jpg" -ErrorAction SilentlyContinue

Write-Host "Image download complete!" -ForegroundColor Green
Write-Host "Images saved to: $imagesDir" -ForegroundColor Cyan