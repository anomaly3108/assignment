const bodyparser = require("body-parser");
const express = require('express')
const mysql = require("mysql");
var app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyparser.json())
    //Database connection
var mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment'
});

mysqlconnection.connect((err) => {
    if (!err)
        console.log('DB connected')
    else
        console.log('connection failed\nError' + JSON.stringify(err, undefined, 2));
})

app.listen(4000, () => console.log('Express server is running  at 4000'))

app.get('/get_employee', (req, res) => {
    mysqlconnection.query('Select * from employee', (err, rows) => {
        if (!err)
            res.send(rows)
        else
            console.log(err)
    })
})

app.post('/add_employee', (req, res) => {
    let emp = req.body.user
    var sql = 'INSERT INTO `employee`(`name`, `age`, `gender`, `phone`) VALUES (?,?,?,?)'
    mysqlconnection.query(sql, [emp.name, emp.age, emp.gender, emp.phone], (err, rows, fields) => {
        if (!err)
            res.send(rows)
        else
            console.log(err)
    })
})