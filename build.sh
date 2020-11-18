#! /bin/bash

apt-get update && apt-get -y install \
    software-properties-common

apt-get install --no-install-recommends -y \
    tzdata \
    python \
    build-essential \
    ca-certificates \
    curl \
    nginx \
    gettext-base \
    nano

bash docker/start.sh

#EOF

