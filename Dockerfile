FROM node:10

RUN mkdir -p /opt/app-root/
WORKDIR /opt/app-root


COPY package*.json ./

RUN npm install

#RUN chgrp -R 0 /opt/app-root && \
#chmod -R g=u /opt/app-root

COPY . .

#USER 1001

EXPOSE 3000
CMD [ "node", "index.js" ]