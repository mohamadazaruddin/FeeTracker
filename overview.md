# Overview 

 FeeTrack is a web application for managing student data and tracking fee payments. The frontend is built with AngularJS, while the backend uses Node.js and Express. The app allows users to add students, record fee payments, and view payment history.

# Tech Stack

Frontend: AngularJS, HTML5, CSS3, Bootstrap 
Backend: Node.js, Express.js
Database: MongoDB 

# Features

Add, edit, and delete student records
Record and update fee payments
View payment history per student
Search/filter students by name, status, or payment status
Dashboard with summary statistics (total students, fees collected, pending fees)
User authentication for secure access

# API Endpoints 

GET /api/students — List all students
POST /api/students — Add new student
GET /api/students/:id — Get student details
PUT /api/students/:id — Update student info
DELETE /api/students/:id — Delete student

# Running the Project

1. Backend

Install dependencies: npm install
Configure database in config.js
Start server: node server.js

2. Frontend

Install dependencies: npm install
Add Env file 
Configure backend in env.local
Start server: yarn start