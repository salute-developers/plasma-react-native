#!/bin/bash

FILE_PATH="./lerna.json"

ALL_PACKAGES='"packages": ["core/*", "libraries/*", "packages/*", "themes/*"],'
THEME_PACKAGES='"packages": ["core/core-themes", "themes/*"],'
COMPONENT_PACKAGES='"packages": ["core/core-components", "libraries/*"],'
ICONS_PACKAGES='"packages": ["packages/plasma-icons"],'

TARGET_REGEX='"packages": \[.*\]'

# Выбор замены в зависимости от аргумента
case $1 in
  "all")
    REPLACEMENT=$ALL_PACKAGES
    ;;
  "themes")
    REPLACEMENT=$THEME_PACKAGES
    ;;
  "components")
    REPLACEMENT=$COMPONENT_PACKAGES
    ;;
  "icons")
    REPLACEMENT=$ICONS_PACKAGES
    ;;
  *)
    echo "Invalid option."
    exit 1
    ;;
esac

# Чтение файла построчно и замена только нужной строки
while IFS= read -r line; do
  if [[ $line =~ $TARGET_REGEX ]]; then
    echo "    $REPLACEMENT"
  else
    echo "$line"
  fi
done < "$FILE_PATH" > tmp && mv tmp "$FILE_PATH"
