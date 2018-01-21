#!/bin/bash

# Install dependencies with npm
NPM_FOUND=`which npm`
if [ ! -x "$NPM_FOUND" ]; then
	echo -e "\nError: executable npm not found on path"
	exit 1
fi
if [ ! -f ./package.json ]; then
	echo -e "\nError: package.json not found"
	exit 1
fi

echo -e "\nRunning npm install"
npm install

# Build site with gatsby
GATSBY_FOUND=`which gatsby`
if [ ! -x "$GATSBY_FOUND" ]; then
	echo -e "\nError: executable gatsby not found on path"
	exit 1
fi
if [ ! -f ./gatsby-config.js ]; then
	echo -e "\nError: gatsby-config.js not found"
	exit 1
fi

echo -e "\nRunning gatsby build"
gatsby build

echo -e "\nRemoving existing build directory"
rm -rf /Users/andrewtaylor/Sites/andrew-and-christine-2019/web

echo -e "\nCopying build files"
mv /Users/andrewtaylor/Development/andrew-christine-wedding/public /Users/andrewtaylor/Sites/andrew-and-christine-2019/web

echo -e "\nCopying index.php"
cp /Users/andrewtaylor/Development/andrew-christine-wedding/index.php /Users/andrewtaylor/Sites/andrew-and-christine-2019/web/index.php

echo -e "\nCommitting files"
git add -A .
date_time="$(date +'%m/%d/%Y at %r')"
git commit -m "Updates to wedding site (${date_time})"

echo -e "\nPushing updates to dev on Pantheon"
git push -f

echo -e "\nPushing updates to test on Pantheon"
terminus env:deploy andrew-and-christine-2019.test --note="Updates to wedding site (${date_time})"

echo -e "\nPushing updates to live on Pantheon"
terminus env:deploy andrew-and-christine-2019.live --note="Updates to wedding site (${date_time})"

echo -e "\nAll done!"