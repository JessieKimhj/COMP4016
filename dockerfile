FROM node:latest
LABEL maintainer="HyunJin Kim"
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "/app.js"]