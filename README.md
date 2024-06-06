# pathbeat
This web application allow users to see through the moviedetails like description,image and title.The users can get extra info related to a particular movie by clicking on the card for that movie.

## Architecture
The project contains the following folders and services
- ```frontend```: Frontend developed using React.js
- ```backend```: Backend developed using Node.js
- ```database```:Database used is Mongodb

**Tech used to make scalable architecture -**
- **React.js** - React's component-based structure promotes reusability and modularity, making the codebase easier to maintain and scale.
- **Node.js** - Node.js is efficient, non-blocking, event-driven architecture ideal for scalable server-side applications
- **Mongodb** - It is flexible, document-oriented data model suitable for handling large volumes of unstructured data.

## Setup Guide
1. Run ```npm install``` in both frontend and Backend.
2. Make .env file in Backend.
    - ```PORT``` :8000
    - ```MONGODB_URI```: your mongodb connection string with db name after slash
3. Database is dumped in a dump folder using mongodump .. restore it using mongorestore
4. Run ```npm start``` in frontend and ```nodemon index.js``` in backend

At this point following service would be up and running: 
|Service|PORT|
|------|------|
|frontend|:3000|
|backend|:8000|

## Movie Data 
[Data used for movies](https://drive.google.com/file/d/1BPEHaNZXbqVSrrNIe1QrLBaCL7abVQui/view?usp=sharing) 

