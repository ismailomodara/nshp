#! /bin/bash

projectName=$PROJECT_NAME
chartName=$PROJECT_NAME

echo $GPG_KEY | gpg --batch --yes --passphrase-fd 0 ssh_key.gpg && chmod 700 ssh_key

ssh-keyscan -H bitbucket.org >> "$HOME/.ssh/known_hosts"

GIT_SSH_COMMAND='ssh -i ssh_key' git clone -b gh-pages git@bitbucket.org:noApp/helm-charts.git

chart=$( ls -t helm-charts/$chartName/ | head -n 1 )

helm inspect values helm-charts/$chartName/$chart

echo $GCP_KEY > helm/gcp_key.json
 
gcloud auth activate-service-account --key-file=helm/gcp_key.json

gcloud container clusters get-credentials nqlb-prod --region europe-west3 --project nqlb-207716

if [ $BITBUCKET_BRANCH = "master" ] ; then
  helm upgrade -i $projectName helm-charts/$chartName/$chart --namespace default -f helm/prod.yaml
elif [ $BITBUCKET_BRANCH = "staging" ] ; then
  helm upgrade -i $projectName helm-charts/$chartName/$chart --namespace staging -f helm/staging.yaml
fi

#EOF