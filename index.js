const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const url = "mongodb://127.0.0.1:27017/admin";
const port = "3000";

mongoose.connect(url, {})
.then(result => console.log('Database connected'))
.catch(err => console.log(err));

const EmployeeRoute = require('./Route/Employee.route');
app.use('/employees', EmployeeRoute)

const SalesRoute = require('./Route/Sales.route');
app.use('/sales', SalesRoute)

app.listen(3000, () =>{
    console.log("Listening to port 3000...");
});