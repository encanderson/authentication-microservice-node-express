FROM node:14 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY production-package.json ./package.json
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

RUN npx prisma generate