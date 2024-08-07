#!/bin/bash

if grep -q '"platform": *"tv"' "package.json"; 
  then
    echo "Update package.json for tv platform."
    cp package.json ./platforms/tv/package.json && cp package-lock.json ./platforms/tv/package-lock.json
  else
    echo "Update package.json for mobile platform."
    cp package.json ./platforms/mobile/package.json && cp package-lock.json ./platforms/mobile/package-lock.json
fi