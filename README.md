
# ![Artist Logo](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/3d355e0b-9c6c-4226-b14a-e7945617ac93)



## Introduction
Artist is a dynamic and visually engaging web application designed for artists to showcase their creative works. Developed as an individual project, this platform empowers users to upload and exhibit their art.

## Project Type
Full Stack


## Deployed App
Frontend: https://artists-inky.vercel.app/

Backend: https://artists-6jh5.onrender.com



## Table of Contents

- [Installation & Getting Started](#installation--getting-started)
- [Usage](#usage)
- [Authenticated Pages](#authenticated-pages)
- [API Endpoints](#api-endpoints)
- [Technology Used](#technology-used)

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

## Installation & Getting Started
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



After successfull Login to User is going to see its profile at top right corner of the application.

![Artist_Profile](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/837f3dae-64cb-4215-ae11-4d85d51c29b7)


## Upload Your Art

Step 3. After Successful Login on the top right corner User Can see a submit button and on clicking on the button user will redirect to another page where user can Upload their art.

![Artist Uploads](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/d2bd6ce1-0d6a-4974-9da6-fbce46e5c284)


**Note** *** In order to set the title of your art you can rename your art to prefered title and then upload.


After your art has been successfully uploaded you can see your art on home page (top left) or in User profile section under Your Posts.

## Single Page Art

Step 4. If user clicks on any of the arts user will be redirected to single art page where user can see how many like , views and comments that art has received. You can also comment , download and share the art. You can also add arts to your favourite collections.

![Artist Single Page](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/fce868bf-4f78-476b-8c6f-15415b3ae7a3)



![Artist Likes Comments](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/0b047f20-e8ab-4a88-b8f1-0a5f67c313e1)



## User Arts

Step 5. If User want to see thier uploaded Arts can see their art in your art section under User profile.

![Artist Your Arts](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/4c005e2a-dda4-4e71-aeac-7c2b6e69c2b8)


## User Favourites

Step 6. User can also add multiple arts to their favourite collection and user can  find them under your profile section on Your Fvourites.

![Artist Fvourite](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/1dec0656-e220-44cd-bc87-df03e32e9460)

## User Profile

Step 7. User can also update their profile images, change password or update their credentials under user profile section.

![Artist User Profile](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/83c3527d-84b3-4b16-9a76-e71c0b6ae9db)


## Footer

Step 8. This is the footer Section.

![Artiist Footer](https://github.com/ParmeshwarMurmu/Artists/assets/121368970/c4d5068c-7fa6-42e3-8b72-4d81e6aea0d1)



## Authenticated Pages


- User Upload Art Page
- User Post Page
- User Profile Page
- User Favourite Post Page


**Note** *** In order to access these pages you need to login first. Without authentication you cannot access this page.


## API Endpoints

In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.

- POST /user/register - To Register User

Example :- 

Request

```bash
/user/register

```

Response
```bash
{ 
   "msg": "User Registered" 
}

```

- POST /user/login - To Login User

Example :- 

Request

```bash
/user/login

```

Response
```bash
{ 
   "msg": "Login Successfully", 
   "userId": existingUser._id, 
   "token": token 
}

```



- GET /post/  - Retrieve all Arts

Example :-

Response
```bash
{
   "msg": "All Post",
   data: [
      {
         image: 'Bikes Blues.jpg',
         user: ObjectId('1332dwscSd23w'),
         title: 'Bikes Blues',
         likes: 121,
         isLiked: false,
         userName: 'Madrid',
         views: 234
      },

      {
         image: 'Cyber Showdown.jpg',
         user: ObjectId('13dww234dwsSd23w'),
         title: 'Cyber Showdown',
         likes: 371,
         isLiked: false,
         userName: 'Wearefamily',
         views: 578
      }
   ]
}
```

- GET /post/singlePost/${id}  -  Retrieve Single Art

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
         user: ObjectId('13dww234dwsSd23w'),
         title: 'Cyber Showdown',
         likes: 371,
         isLiked: false,
         userName: 'Wearefamily',
         views: 578
   }
}

```

- PATCH /post/views/${id} - To update views on each Art

Example :- 


Request

```bash
/post/views/65890a780a8bafacad471d32

```

- PATCH /post/postLike/${id} - To update Likes on each Art

Example :-

Request

```bash
/post/postLike/65890a780a8bafacad471d32

```
- POST /post/postComment/${id} - To Comment On Art

Example :-

Request

```bash
/post/postComment/65890a780a8bafacad471d32 , { comment }, { headers }

```

Response

```bash
{ 
   "msg": "Comment Posted"
}

```

- POST /post/newSubmission - To Upload Art

Example :-

Request

```bash
/post/newSubmission

```

Response

```bash
{ 
   "msg": "Uploaded Successfull"
}

```

- GET /post/userPost - To get user Arts

Example :-


Request

```bash
/post/userPost

```

Response

```bash
{ 
   "msg": "userPost", 
   "userPost": [
      {
        image: 'Cyber Showdown.jpg',
         user: ObjectId('13dww234dwsSd23w'),
         title: 'Cyber Showdown',
         likes: 371,
         isLiked: false,
         userName: 'Wearefamily',
         views: 578
      },
      {
         image: 'German Castle.jpg',
         user: ObjectId('13dww234dwsSd23w'),
         title: 'German Castle',
         likes: 371,
         isLiked: false,
         userName: 'Wearefamily',
         views: 578
      }
   ]
}

```

- GET /post/userFavourite - To get User Favourite Arts

Example :-


Request

```bash
/post/userFavourite

```

Response

```bash
{
   "msg": "userFavourite", 
   "userFavourite": [
      {
       user: ObjectId('658a51c93d282733be99e951'),
       post: ObjectId('658926b0572e88c517aec9df')
      },

      {
       user: ObjectId('658a51c93d282733be99e951'),
       post: ObjectId('658926b0572e88c517aec9ef')
      }
   ]
}

```

- DELETE post/userPost/delete/${id} - To delete user arts

Example :-


Request

```bash
post/userPost/delete/658926b0572e88c517aec9ef

```

Response

```bash
{
   "msg": "Post Deleted"
}

```

- DELETE /post/userFavourite/delete/${id} - To delete user Favourite

Example :-


Request

```bash
/post/userFavourite/delete/658a51c93d282733be99e951

```

Response

```bash
{
   "msg": "Favourite Deleted"
}

```



- POST /user/userProfileUpdate - To update user Profile

Example :-


Request

```bash
/user/userProfileUpdate

```

Response

```bash
{
   "msg": "Profile Updated"
}

```

- GET /post/suggestedArts - To get Suggested Arts

Example :-


Request

```bash
/post/suggestedArts

```

Response

```bash
{
   "msg": "suggestedArts",
    "suggestedArts": [
      {
         image: 'Bikes Blues.jpg',
         user: ObjectId('1332dwscSd23w'),
         title: 'Bikes Blues',
         likes: 121,
         isLiked: false,
         userName: 'Madrid',
         views: 234
      },

      {
         image: 'Cyber Showdown.jpg',
         user: ObjectId('13dww234dwsSd23w'),
         title: 'Cyber Showdown',
         likes: 371,
         isLiked: false,
         userName: 'Wearefamily',
         views: 578
      }
    ]
}

```

- GET /post/moreArts/${id} - To get Arts Related to that Artist (User)

Example :-


Request

```bash
/post/moreArts/13dww234dwsSd23w

```

Response

```bash
{
   "msg": "AmoreArts", 
   "moreArts": [
      {
         image: 'Bikes Blues.jpg',
         user: ObjectId('1332dwscSd23w'),
         title: 'Bikes Blues',
         likes: 121,
         isLiked: false,
         userName: 'Madrid',
         views: 234
      },

      {
         image: 'Cyber Showdown.jpg',
         user: ObjectId('13dww234dwsSd23w'),
         title: 'Cyber Showdown',
         likes: 371,
         isLiked: false,
         userName: 'Wearefamily',
         views: 578
      }
   ]
}

```

## Technology Used

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


**Database**
- MongoDB
