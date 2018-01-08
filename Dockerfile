FROM node:boron

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install gulp -g
RUN npm install bower -g
RUN npm install

COPY . /usr/src/app/
# COPY bower.json /usr/src/app/
# COPY gulpfile.js /usr/src/app/
# COPY app.js /usr/src/app/
# COPY cdn /usr/src/app/
# COPY public /usr/src/app/
# COPY source /usr/src/app/

EXPOSE 80

CMD gulp