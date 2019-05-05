FROM node:9-slim
WORKDIR /nodejswebapp
COPY package.json /nodejswebapp
RUN npm install
COPY . /app
CMD ["npm","start"]
