#!/usr/bin/env bash
# Компиляция SCSS -> CSS (один вызов, чтобы не плодить подтверждения прав).
# Пути определяются автоматически — скрипт работает на любом ПК.
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Выбираем доступный компилятор Sass:
if [ -f "C:/Users/RiFA/tools/dart-sass/sass.bat" ]; then
  SASS=("C:/Users/RiFA/tools/dart-sass/sass.bat")   # локальный dart-sass (домашний ПК)
elif command -v sass >/dev/null 2>&1; then
  SASS=(sass)                                        # sass в PATH
else
  SASS=(npx --yes sass)                              # запасной вариант через npx
fi

"${SASS[@]}" "$ROOT/scss/main.scss" "$ROOT/css/main.css" --no-source-map --style=compressed --quiet --silence-deprecation=import 2>/dev/null
code=$?
if [ $code -eq 0 ]; then
  echo "OK main.css = $(wc -c < "$ROOT/css/main.css") bytes"
else
  echo "FAIL exit=$code"
fi
exit $code
