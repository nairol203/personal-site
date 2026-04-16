FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine

WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html

EXPOSE 8080