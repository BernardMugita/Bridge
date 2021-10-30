const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "PlutoXbaby12@",
    database: "bridge",
});

app.use(bodyParser.urlencoded({extends: true}));

app.post('/Register', (req, res) => {

    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const userName = req.body.userName;
    const Password = req.body.Password;

            const sqlInsert = "INSERT INTO users (firstName, secondName, userName, Password) VALUES (?,?,?,?)"
            db.query(sqlInsert, [firstName, secondName, userName, Password],
            (err, result) => {
                console.log(err);
        }    
    ); 
});

app.post('/Login', (req, res) => {

    const UserName = req.body.UserName;
    const Password = req.body.Password;

    db.query("SELECT * FROM login (UserName = ? AND Password = ?",
        [UserName, Password],
        (err, result) => {
            if (err) {
                res.send({err: err})
            
              if (result) {
                  res.send(result)
              } else {
                  res.send({ message: "Wrong Username or Password, Try Again"});
              }
            }
})
});

app.listen(3001, ()=> {
    console.log("running server")
});