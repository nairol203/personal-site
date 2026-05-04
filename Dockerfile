FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine@sha256:7377697a821c131a924a7105fafbe7414db4e9fcc77a6f08f776f33f141ec3f8

WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html

EXPOSE 8080