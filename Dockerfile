FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine@sha256:8a7fd2dfd8bfae329b96118207b7a9153293f71c7fee042ed7ffbc4461a8788d

WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html

EXPOSE 8080