#!/usr/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT="$(dirname "${SCRIPT_DIR}")"

cd "${ROOT}"

form_base_url=$1
branch=$2

if [ -z "$branch" ]; then
    branch=master
fi

git checkout -- pages/about-nshp.vue
git checkout -- pages/faq.vue
git checkout -- pages/index.vue
git checkout -- pages/partnerships.vue

git pull origin $branch

sed -i "s|{{form_base_url}}|$form_base_url|g" pages/about-nshp.vue
sed -i "s|{{form_base_url}}|$form_base_url|g" pages/faq.vue
sed -i "s|{{form_base_url}}|$form_base_url|g" pages/index.vue
sed -i "s|{{form_base_url}}|$form_base_url|g" pages/partnerships.vue

npm install
yarn generate
