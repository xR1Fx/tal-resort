@echo off
REM Авто-компиляция SCSS -> CSS при каждом изменении.
REM Просто оставь это окно открытым во время работы над стилями.
cd /d "%~dp0"
sass --watch scss/main.scss:css/main.css
