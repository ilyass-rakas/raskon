# Script to convert JPG images to WebP format for Raskon Appart project
# Prerequisites: Install ImageMagick (https://imagemagick.org/script/download.php#windows)
# Usage: Open PowerShell as Admin, navigate to project root, and run: .\convert-to-webp.ps1

# Configuration
$sourceDir = "src\assets"
$output = "Converting JPG images to WebP format..."
Write-Host $output -ForegroundColor Green

# Check if source directory exists
if (-not (Test-Path $sourceDir)) {
    Write-Host "Error: $sourceDir directory not found!" -ForegroundColor Red
    exit 1
}

# Check if magick command is available (ImageMagick)
$magickExists = Get-Command magick -ErrorAction SilentlyContinue
if (-not $magickExists) {
    Write-Host "`nImageMagick is not installed or not in PATH." -ForegroundColor Yellow
    Write-Host "Please install ImageMagick from: https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
    Write-Host "Make sure to check 'Install ImageMagick legacy utilities' during installation." -ForegroundColor Yellow
    exit 1
}

# Get all JPG files
$jpgFiles = Get-ChildItem -Path $sourceDir -Filter "*.jpg" -File
$jpgFilesLower = Get-ChildItem -Path $sourceDir -Filter "*.JPG" -File
$allJpgFiles = @($jpgFiles) + @($jpgFilesLower)

if ($allJpgFiles.Count -eq 0) {
    Write-Host "No JPG files found in $sourceDir" -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($allJpgFiles.Count) JPG file(s) to convert`n" -ForegroundColor Cyan

# Convert each JPG to WebP
$convertedCount = 0
foreach ($file in $allJpgFiles) {
    $webpPath = [System.IO.Path]::Combine($sourceDir, [System.IO.Path]::GetFileNameWithoutExtension($file.Name) + ".webp")
    
    Write-Host "Converting: $($file.Name) → $(Split-Path -Leaf $webpPath)..." -ForegroundColor Cyan
    
    # Use ImageMagick to convert with quality 85
    magick convert "$($file.FullName)" -quality 85 "$webpPath"
    
    if ($LASTEXITCODE -eq 0) {
        # Get file sizes for comparison
        $originalSize = [math]::Round($file.Length / 1KB, 2)
        $webpSize = [math]::Round((Get-Item $webpPath).Length / 1KB, 2)
        $savings = [math]::Round(100 - (($webpSize / $originalSize) * 100), 1)
        
        Write-Host "✓ Success - Original: $($originalSize)KB → WebP: $($webpSize)KB (saved $savings%)" -ForegroundColor Green
        $convertedCount++
    } else {
        Write-Host "✗ Failed to convert $($file.Name)" -ForegroundColor Red
    }
}

Write-Host "`nConversion complete! Converted $convertedCount file(s)." -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Update your image imports to use .webp instead of .jpg (or use dynamic imports)" -ForegroundColor White
Write-Host "2. You can keep original JPG files as fallback or delete them to save disk space" -ForegroundColor White
Write-Host "3. Test the website at http://localhost:5173 to ensure images load correctly" -ForegroundColor White
