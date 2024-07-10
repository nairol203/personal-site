# Use the official Nginx image as a base
FROM nginx:alpine

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy website files to the default Nginx public directory
COPY public /usr/share/nginx/html/public
COPY favicon.ico /usr/share/nginx/html/favicon.ico
COPY index.html /usr/share/nginx/html/index.html 
COPY projects.js /usr/share/nginx/html/projects.js 
COPY tailwind.config.js /usr/share/nginx/html/tailwind.config.js 

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
