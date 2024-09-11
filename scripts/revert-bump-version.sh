for file in themes/**/package.json themes/**/package-lock.json core/core-themes/package.json core/core-themes/package-lock.json; do
    git checkout -- "$file"
done