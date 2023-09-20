# Attryb-assignment

**Deploy Link**
- vercel website link-> https://attryb-assignment-zp94.vercel.app/
- cyclic Backend link-> https://repulsive-outfit-frog.cyclic.cloud/

**Tech Stacks Used**

<p align = "center">
<img src="https://manikprakash-portfolio.netlify.app/skills/react.svg" alt="react.js" width="55" height="55"/>
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
 <img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFHNyI5c3DdJFK6PKgrTylFMX2UDgcvfMrauvkFkzPHxg1luQjlCv9pY&usqp=CAU" alt="vercel" width="50" height="50"/>
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>
<hr>

## Features

* User  authentication (signup & Login)
* Customer Features:
    * dealer can see Original Equipment Manufacturers (OEM) route.
    * dealer can add second-hand car.
    * edit and delete the second-hand car data only for authorized dealer.
    * filter function(price, color).


## Run Locally
### Clone this Project

```
https://github.com/Prags1709/Attryb-assignment.git
```

### Install npm Packages

```javascript
npm i --global
```

### Go to Backend Folder
```javascript
cd backend
```

### Run Server
```javascript
npm run server
```
### Go to Front-end Folder
```javascript
cd frontend
cd attryb
```

### Run Server
```javascript
npm start
```

### Runs the project in the development mode

http://localhost:4000

## NPM Packages
<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>

</p>

## API end points

| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | /api/signup | This endpoint allow users to register. | 201 |
| POST | /api/login | This endpoint allow users to login. | 201 |
| GET | /oem/allOem | This endpoint return a list of oem cars | 200 |
| POST | /car/addCar | This endpoint allow users to add new flights to the system.| 201 |
| GET | /car/allCar | This endpoint return the details of a all the second-hand car data. | 200 |
| PATCH | /car/update/:id | This endpoint allow users to update the details of a specific the second-hand car data by its ID. | 204 |
| DELETE | /car/delete/:id | This endpoint allow users to delete a specific the second-hand car identified by its ID. | 202 |
| POST | /oem/addOem | This endpoint allow the user add oem car data. | 201 |
