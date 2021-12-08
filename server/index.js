const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "fypdatabase",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("conected to db");
});

app.use(cors());
app.use(express.json());

//Sign-in
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlSelect = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sqlSelect, [email, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong email and password combination" });
    }
  });
});

// Register user in the DB
app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const sqlInsert =
    "INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?)";
  db.query(sqlInsert, [firstName, lastName, email, password], (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
