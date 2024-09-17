#!/bin/bash

CORE_COMPONTENS_DIR="core/core-components"

LIBRARIES_DIR="libraries"

remove_package_files() {
  rm -rf $1/package.json $1/package-lock.json
}

remove_package_files $CORE_COMPONTENS_DIR

for dir in $(find $LIBRARIES_DIR -mindepth 1 -maxdepth 1 -type d | sort -u); do
  remove_package_files $dir
done


