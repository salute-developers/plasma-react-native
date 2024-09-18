#!/bin/bash

CORE_COMPONTENS_DIR="core/core-components"

LIBRARIES_DIR="libraries"

prepare_platform() {
  if [ "$PLATFORM" == 'tv' ] 
      then
        pushd $1

        if [ -f "package.json" ]; then
          echo "Package.json in $1 is exist. Starting update"
          npm run package-update
        fi

        echo "Create package.json in $1"
        cp ./platforms/tv/package.json package.json && cp ./platforms/tv/package-lock.json package-lock.json

        popd

      else
        pushd $1

        if [ -f "package.json" ]; then
          echo "Package.json in $1 is exist. Starting update"
          npm run package-update
        fi

        echo "Create package.json in $1"
        cp ./platforms/mobile/package.json package.json && cp ./platforms/mobile/package-lock.json package-lock.json

        popd
  fi
}

prepare_platform $CORE_COMPONTENS_DIR

for dir in $(find $LIBRARIES_DIR -mindepth 1 -maxdepth 1 -type d | sort -u); do
  prepare_platform $dir
done


