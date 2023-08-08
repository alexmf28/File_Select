#!/usr/bin/env sh

# abort on errors
set -e

#build
npm run build

#navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'
https://github.com/alexmf28/File_Select/settings/pages
git push -f git@github.com:alexmf28/File_Select.git master:gh-pages

cd -