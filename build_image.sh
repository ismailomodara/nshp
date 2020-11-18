#! /bin/bash

PROJECT_NAME=$PROJECT_NAME

apt-get install -qq -y gettext

build_push () {
  gcloud --quiet config set project $PROJECT_ID
  gcloud --quiet config set compute/zone $GOOGLE_COMPUTE_ZONE
  docker build -t $PROJECT_NAME .
  docker tag $PROJECT_NAME:latest eu.gcr.io/$PROJECT_ID/$PROJECT_NAME:latest
  gcloud auth print-access-token | docker login -u oauth2accesstoken --password-stdin https://eu.gcr.io
  echo pushing image .......
  docker push eu.gcr.io/$PROJECT_ID/$PROJECT_NAME:latest
}

if [ $BITBUCKET_BRANCH = "piping" ] ; then
  echo "Deploying image to production repository"
  PROJECT_ID=$GOOGLE_PROJECT_ID
  echo $GCP_KEY > helm/prod_key.json
  gcloud auth activate-service-account --key-file=helm/prod_key.json
  build_push
elif [ $BITBUCKET_BRANCH = "staging" ] ; then
  echo "Deploying image to staging repository"
  PROJECT_ID=$GOOGLE_PROJECT_ID
  echo $GCP_KEY > helm/staging_key.json
  gcloud auth activate-service-account --key-file=helm/staging_key.json
  build_push
fi

#EOF

