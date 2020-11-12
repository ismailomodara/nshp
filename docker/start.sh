#!/usr/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT="$(dirname "${SCRIPT_DIR}")"

cd "${ROOT}"

envsubst '$SERVER_NAME' < docker/nginx.conf > /etc/nginx/sites-available/default

sed -i "s|{{form_base_url}}|$FORM_BASE_URL|g" pages/about-nshp.vue
sed -i "s|{{form_base_url}}|$FORM_BASE_URL|g" pages/faq.vue
sed -i "s|{{form_base_url}}|$FORM_BASE_URL|g" pages/index.vue
sed -i "s|{{form_base_url}}|$FORM_BASE_URL|g" pages/partnerships.vue

npm install
yarn generate

nginx -g 'daemon off;'
