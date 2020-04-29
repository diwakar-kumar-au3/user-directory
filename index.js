var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

app.use(cors());
app.use(bodyParser.json());
// var url = "mongodb://localhost:27017/";
var url =
  "mongodb+srv://dkr:$$dkr84@cluster0-trkub.mongodb.net/test?retryWrites=true&w=majority";
var db;
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;
  console.log("DB connected");
  db = client.db("userdir");
});

app.locals.ObjectId;
ObjectId = require("mongodb").ObjectID;

app.get("/getinfo", (req, res) => {
  db.collection("detail")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});
app.post("/postinfo", (req, res) => {
  // console.log(req.body);
  db.collection("detail").insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.put("/updateinfo", (req, res) => {
  // console.log(req.body);
  const { email, username, contact, address } = req.body;
  db.collection("detail").updateOne(
    { _id: ObjectId(req.body._id) },
    {
      $set: {
        username,
        contact,
        address,
        email,
      },
    },
    (error, result) => {
      if (error) throw err;
      res.send("updated Successfully");
    }
  );
});
app.delete("/delete/:id", (req, res) => {
  // console.log(req.params);
  db.collection("detail").findOneAndDelete(
    { _id: ObjectId(req.params.id) },
    (err, result) => {
      if (err) throw err;
      res.send("Deleted Successfully");
    }
  );
});

app.listen(5000);
