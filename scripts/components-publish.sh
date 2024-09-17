npx lerna exec --scope=@salutejs/core-components-$1 -- npm publish --tag $2

for dir in $(find "libraries" -maxdepth 2 -type f -name 'package*' -exec dirname {} \; | sort -u); do
  PACKAGE_NAME=$(basename "$dir")

  npx lerna exec --scope=@salutejs/$PACKAGE_NAME-$1 -- npm publish --tag $2
done