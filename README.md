# NodeJS-REST

A NodeJS applications that implements a REST service using MongoDB 

### Installing 

`git clone https://github.com/Dj0nny/NodeJS-Rest.git`

Also you need a [MongoDB Server](https://www.mongodb.com)

### Running

You must be inside the root directory of the repository

`node index.js`

### Testing

For testing, open [Postman](https://www.getpostman.com/) and send a GET request at the following link after your run the MongoDB Server, 

`http://127.0.0.1:7777/api`

If everything is working fine, you should see something like this:

![picture alt](https://raw.githubusercontent.com/Dj0nny/NodeJS-Rest/master/screenshot/postman1.JPG)

### Create an Element

Send a request to the URL that you see using the POST method, filling the fields with the keys and its values (here I used only the Name key)

![picture alt](https://raw.githubusercontent.com/Dj0nny/NodeJS-Rest/master/screenshot/post.JPG)

### Get the Elements

Send at the same URL a GET request 

![picture alt](https://raw.githubusercontent.com/Dj0nny/NodeJS-Rest/master/screenshot/get.JPG)

