FROM node:15.1.0-alpine3.12

WORKDIR /root/app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY . .

CMD ["npm", "run", "start"]