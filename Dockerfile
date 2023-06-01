FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN sudo apt-get -y update
RUN sudo apt-get -y upgrade
RUN sudo apt-get install -y sqlite3

WORKDIR /home/node/app

COPY package*.json ./
USER node
RUN npm install

COPY --chown=user:node . .

EXPOSE 3000

CMD ["node", "/home/node/app/bin/www"]