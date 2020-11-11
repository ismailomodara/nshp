#!/usr/bin/env bash


curl -s https://download.newrelic.com/infrastructure_agent/gpg/newrelic-infra.gpg | apt-key add -
echo "license_key: eu01xxa5c870ce6b8d9c9af9b11c1204702dNRAL" | tee -a /etc/newrelic-infra.yml
echo "license_key: $NEWRELIC_LICENSE_KEY" | tee -a /etc/newrelic-infra.yml
printf "deb [arch=amd64] https://download.newrelic.com/infrastructure_agent/linux/apt bionic main" | tee -a /etc/apt/sources.list.d/newrelic-infra.list
apt-get update
apt-get install newrelic-infra -y
