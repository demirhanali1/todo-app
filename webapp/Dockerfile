# base image
FROM node:18

# working directory
WORKDIR /usr/src/app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install

# copy source
COPY . .

# expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]