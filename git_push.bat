@echo off
git init
git add .
git commit -m "first commit"
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin https://github.com/giaphuocklg2-commits/linkplanding.git
git remote -v
git status
git push -u origin main
