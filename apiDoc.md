*FeeTracker Api Documentation*

# Baseurl
https://feetracker-be.onrender.com

# Endpoints

1. Students

*Create a Student*

URL: /students
Method: POST
Body (JSON):

{
  "name": "John Doe",
  "rollNumber": "A101",
  "class": "10A",
  "totalFee": 5000
}

 *response*

{
  "_id": "student_id",
  "name": "John Doe",
  "rollNumber": "A101",
  "class": "10A",
  "totalFee": 5000,
  "feePaid": 0,
  "createdAt": "2024-06-06T12:00:00.000Z"
}


*Get All Students*

URL: /students
Method: GET
Response: Array of student objects


*Get Student by ID*

URL: /students/:id
Method: GET
Response: Student object


*Update Student*

URL: /students/:id
Method: PUT
Body (JSON): (Any updatable fields)
Response: Updated student object

*Delete Student*

URL: /students/:id
Method: DELETE
Response:Code ExampleJSON{ "message": "Student deleted" }




2. Payments
*Create a Payment*

URL: /payments
Method: POST
Body (JSON):Code ExampleJSON{
  "studentId": "student_id",
  "amount": 2000,
  "method": "cash",
  "remarks": "First installment"
}


Response:Code ExampleJSON{
  "_id": "payment_id",
  "studentId": "student_id",
  "amount": 2000,
  "paymentDate": "2024-06-06T12:00:00.000Z",
  "method": "cash",
  "remarks": "First installment"
}




*Get Payments for a Student (with Student Data)* 

URL: /payments/student/:studentId
Method: GET
Response:
Option 1: (each payment includes student data)Code ExampleJSON[
  {
    "_id": "payment_id",
    "studentId": {
      "_id": "student_id",
      "name": "John Doe",
      "rollNumber": "A101",
      "class": "10A",
      "totalFee": 5000,
      "feePaid": 2000,
      "createdAt": "2024-06-06T12:00:00.000Z"
    },
    "amount": 2000,
    "paymentDate": "2024-06-06T12:00:00.000Z",
    "method": "cash",
    "remarks": "First installment"
  }
]

Option 2: (student data once, payments as array)Code ExampleJSON{
  "student": {
    "_id": "student_id",
    "name": "John Doe",
    "rollNumber": "A101",
    "class": "10A",
    "totalFee": 5000,
    "feePaid": 2000,
    "createdAt": "2024-06-06T12:00:00.000Z"
  },
  "payments": [
    {
      "_id": "payment_id",
      "amount": 2000,
      "paymentDate": "2024-06-06T12:00:00.000Z",
      "method": "cash",
      "remarks": "First installment"
    }
  ]
}




