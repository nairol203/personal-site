FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine@sha256:b9f7ba14f1f7bd3d40d7753584048f92c3aef9ccf5fab14efe4451a8d4c04d63

WORKDIR /usr/share/nginx/html

COPY ./public/ /usr/share/nginx/html

EXPOSE 8080
