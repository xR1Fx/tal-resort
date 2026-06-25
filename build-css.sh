#!/usr/bin/env bash
# Компиляция SCSS -> CSS (один вызов, чтобы не плодить подтверждения прав)
SASS="C:/Users/RiFA/tools/dart-sass/sass.bat"
ROOT="C:/Users/RiFA/Desktop/TalResort"
"$SASS" "$ROOT/scss/main.scss" "$ROOT/css/main.css" --no-source-map --style=expanded --quiet --silence-deprecation=import 2>/dev/null
code=$?
if [ $code -eq 0 ]; then
  echo "OK main.css = $(wc -c < "$ROOT/css/main.css") bytes"
else
  echo "FAIL exit=$code"
fi
exit $code
