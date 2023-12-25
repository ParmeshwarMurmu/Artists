
# Project Title
Artists 

## Introduction
"Artist" is a dynamic and visually engaging web application designed for artists to showcase their creative works. Developed as an individual project, this platform empowers users to upload and exhibit their art.

## Project Type
Fullstack

## Deplolyed App
Frontend: https://artists-inky.vercel.app/
Backend: https://artists-6jh5.onrender.com


## Directory Structure
Artists/
├─ backend/
   ├─ Arts/
      ├─ Folder to store user uploaded Arts
   ├─ Config/
      ├─ db.js
   ├─ middleware/
      ├─ auth.js
   ├─ Models/
      ├─ commentSchema.js 
      ├─ favouriteSchema.js
      ├─ postSchema.js
      ├─ userSchema.js
   ├─ Routes/
      ├─ postRoute.js
      ├─ userRoute.js
   ├─ userProfile/
      ├─ Folder to store all user profile Images uploaded Arts
   ├─ index.js/
    
├─ frontend/
   ├─ public/
   ├─ src/
      ├─ Assets/
      ├─ Components/
      ├─ ContextApi/
      ├─ CSS/
      ├─ Redux/
      ├─ Routes/
      ├─ Variables/

<!-- ## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ] -->

<!-- ## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ] -->

## Features

✅ Signup
✅ Login
✅ Handle File Uploads
✅ Authentication
✅ Authorization
✅ Updating
✅ Deleting
✅ Text Search
✅ Responsive

<!-- ## design decisions or assumptions
List your design desissions & assumptions -->

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For Backend/Frontend projects, guide the reviewer how to check mongodb schema etc.


Step 1. Clone this Repository using Command
```bash
git clone Repository Url
```

Step 2. Install all the necessary dependencies

frontend
```bash
cd frontend
npm install
```
this will install all the necessary dependencies on for your frontend.


backend
```bash
cd backend
npm install
```
this will install all the necessary dependencies on your backend



Step 3. Create .env flie inside your backend folder and add below informations
```bash
mongoUrl = "mongodb+srv://YOUR ATLAS ID : YOUR ATLAS PASSWORD@cluster0.nnesbwa.mongodb.net/Artists?retryWrites=true&w=majority"
PORT = 8000
SECRET_KEY = 'YOU CAN ADD ANY RANDOM KEY'

```
Step 4. Start your backend server. Open terminal and write the below commands
```bash
cd backend
npm run server

```
this will start your backend server.

Step 5. Start your frontend application. Open terminal and write the below commands
```bash
cd frontend
npm start

```
this will start your frontend application.




```bash
npm install my-project
cd my-project
npm start
```

## Usage
Provide instructions and examples on how to use your project.

```bash
# Example
```

Include screenshots as necessary.

## Credentials
Provide user credentials for autheticated pages

## APIs Used
If your application relies on external APIs, document them and include any necessary links or references.

## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET /api/items - retrieve all items
POST /api/items - create a new item


## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB
- Other libraries/modules