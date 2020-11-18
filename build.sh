#!/usr/bin/env bash

apt-get update && apt-get -y install \
    software-properties-common

apt-get install --no-install-recommends -y \
    tzdata \
    python \
    build-essential \
    ca-certificates \
    curl \
    gettext-base

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT="$(dirname "${SCRIPT_DIR}")"

cd "${ROOT}"

# sed -i "s|{{form_base_url}}|$FORM_BASE_URL|g" pages/about-nshp.vue
# sed -i "s|{{form_base_url}}|$FORM_BASE_URL|g" pages/faq.vue
# sed -i "s|{{form_base_url}}|$FORM_BASE_URL|g" pages/index.vue
# sed -i "s|{{form_base_url}}|$FORM_BASE_URL|g" pages/partnerships.vue

npm install

echo exit status for npm install $?

#EOF

