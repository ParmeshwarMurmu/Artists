
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

-**Artists/**
- **backend/**
   - **Arts/**
      - Folder to store user uploaded Arts
   - **Config/**
      - db.js
   - **middleware/**
      - auth.js
   - **Models/**
      - commentSchema.js 
      - favouriteSchema.js
      - postSchema.js
      - userSchema.js
   - **Routes/**
      - postRoute.js
      - userRoute.js
   - **userProfile/**
      - Folder to store all user profile Images uploaded Arts
   - index.js

- **frontend/**
   - **public/**
   - **src/**
      - **Assets/**
      - **Components/**
      - **ContextApi/**
      - **CSS/**
      - **Redux/**
      - **Routes/**
      - **Variables/**
<!-- ## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ] -->

<!-- ## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ] -->

## Features

- ✅ Signup
- ✅ Login
- ✅ Handle File Uploads
- ✅ Authentication
- ✅ Authorization
- ✅ Updating
- ✅ Deleting
- ✅ Text Search
- ✅ Responsive

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



## Usage
Below are some instructions and examples on how to use this project.

## Sign Up

Step 1. If you are a new user and you have not registered then to upload your art you need to first create your Account.

**Note** *** Password should be greater than 6 characters and it should contain at least 1 numeric, 1 upper case, and 1 special Characters.

![Artist_Register](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/3ffd5d3f-47fc-42f7-89e1-a90d7e7a2878)

## Login

Step 2. After successfull Registration Login to Your and use the same credential used at the time of registration.

![Artrist_Login](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/6337f650-d193-42ad-8eea-018a43d12e1b)



After successfull Login to You are going to see your profile at top right corner of you application.

![Artist_Profile](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/837f3dae-64cb-4215-ae11-4d85d51c29b7)


## Upload Your Art

Step 3. After Successful Login on the top right corner you will see a submit button and on clicking on the button you will redirect to another page where you can Upload your art.

**Note** *** In order to set the title of your art you can rename your art to prefered title and then upload.


After your art has been successfully uploaded you can see your art on home page (top left) or in your profile section under Your Posts.


## Your Arts

If you want to see the your arts that you have uploaded you cn see it in your art section under your profile.


## Single Page Art

If you click on any of the arts you will be redirected to single art page where you can see how many like , views and comments that art has received. You can also comment , download and share the art. You can also add arts to your favourite collections.


## User Profile

## Footer



## Authenticasted Page

- Upload Art Page
- User Post Page
- User Profile Page
- User Favourite Page

**Note** *** In order to access these pages you need to login first. Without authentication you cannot access this page.


## API Endpoints

In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.


GET /post/  - Retrieve all Arts

Example :-

Response
```bash
{
   "msg": "All Post",
   data: [
      {
         image: 'Bikes Blues.jpg',
         user: ObjectId(1332dwscSd23w),
         title: 'Bikes Blues',
         likes: 121,
         isLiked: false,
         userName: 'Madrid',
         views: 234
      },

      {
         image: 'Cyber Showdown.jpg',
         user: ObjectId(13dww234dwsSd23w),
         title: 'Cyber Showdown',
         likes: 371,
         isLiked: false,
         userName: 'Wearefamily',
         views: 578
      }
   ]
}
```

GET /post/singlePost/${id}  -  Retrieve Single Art

Example :- 

Request

```bash
/post/singlePost/65890a780a8bafacad471d32

```

Response

```bash
{ 
   "singleData" : {
         image: 'Cyber Showdown.jpg',
         user: ObjectId(13dww234dwsSd23w),
         title: 'Cyber Showdown',
         likes: 371,
         isLiked: false,
         userName: 'Wearefamily',
         views: 578
   }
}

```


GET /api/items - retrieve all items
POST /api/items - create a new item


## Technology Stack
List and overview of the technologies used in the project.

**frontend**
- HTML
- CSS
- javaScript
- React
- chakraUi
- Redux

**backend**
- Node.js
- Express.js


qw**Database**
- MongoDB
