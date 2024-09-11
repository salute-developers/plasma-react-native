#!/bin/bash

CORE_COMPONTENS_DIR="core/core-components"

LIBRARIES_DIR="libraries"

PLATOFRM=$1

replace_dependencies() {
  OLD_PACKAGE_NAME='"name": "@salutejs/.*"'
  OLD_DEPENDENCY_NAME='"@salutejs/core-components": ".*"'

  NEW_DEPENDENCY_NAME='"@salutejs/core-components": "npm:@salutejs/core-components'

  while IFS= read -r line; do
    # Замена имени пакета
    if [[ $line =~ $OLD_PACKAGE_NAME ]]; then
      value="${line#*: \"}"
      value="${value%\",*}"

      line="  \"name\": \"$value-$PLATOFRM\","
    fi

    # Замена зависимости, сохраняя версию
    if [[ $line =~ $OLD_DEPENDENCY_NAME ]]; then
      version=${line#*: \"}
      version=${version%\"*}
      leading_spaces="${line%%[![:space:]]*}"

      line="${leading_spaces}${NEW_DEPENDENCY_NAME}-${PLATOFRM}@$version\","
    fi

    echo "$line"
  done < "$1/$2" > tmp && mv tmp "$1/$2"

}

replace_dependencies $CORE_COMPONTENS_DIR package.json
replace_dependencies $CORE_COMPONTENS_DIR package-lock.json

for dir in $(find $LIBRARIES_DIR -mindepth 1 -maxdepth 1 -type d | sort -u); do
  replace_dependencies $dir package.json
  replace_dependencies $dir package-lock.json
done

