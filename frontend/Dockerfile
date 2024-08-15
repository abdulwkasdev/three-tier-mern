FROM node:20.15-alpine AS build

WORKDIR /usr/scr/app

COPY *.json ./

RUN npm install 

COPY . .

#EXPOSE 3000
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

RUN npm run build

# ENTRYPOINT [ "npm", "run", "dev" ]

# Stage 2: Serve with NGINX
FROM nginx:alpine AS production

# Copy the built files from the previous stage
COPY --from=build /usr/scr/app/dist /usr/share/nginx/html

# Copy custom NGINX configuration
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port NGINX is listening on
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]