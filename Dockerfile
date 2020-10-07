FROM node:12.18.3

RUN apt-get update && apt-get -y install \
    software-properties-common

RUN apt-get install --no-install-recommends -y \
    tzdata \
    python \
    build-essential \
    ca-certificates \
    curl \
    nginx \
    gettext-base \
    nano

WORKDIR /var/www/html
COPY . /var/www/html

EXPOSE 80

VOLUME ["/var/www/html"]
CMD ["bash", "/var/www/html/docker/start.sh"]
