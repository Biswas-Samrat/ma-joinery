# Instructions for Cleanup

To remove the old local photo folders that are now completely hosted on Cloudinary:
Run in PowerShell:
```powershell
Remove-Item -Recurse -Force public\hero, public\projects, public\service
```
Logo and favicon are preserved in `public\logo.png` and `public\file.svg` / `public\next.svg`.

