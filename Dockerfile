FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine@sha256:9d4ab2b70ec4b86e8576f783066d178d4725dc8c4b3bd060cb09f6d058ba9291

WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html

EXPOSE 8080