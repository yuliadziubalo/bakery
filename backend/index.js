import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "diploma",
  database: "bakery",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/cakes", (req, res) => {
  const q = "SELECT * FROM cakes";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/cupcakes", (req, res) => {
  const q = "SELECT * FROM cupcakes";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/macarons", (req, res) => {
  const q = "SELECT * FROM macarons";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.get("/pastry", (req, res) => {
  const q = "SELECT * FROM pastry";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});


app.listen(8800, () => {
  console.log("Connected to backend.");
});