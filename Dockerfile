FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine@sha256:35a4455cd4153d7cd0ae1fcfa42451884ef19848202606f144d9a089376c7e6c

WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html

EXPOSE 8080