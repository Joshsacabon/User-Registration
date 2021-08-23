const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    User.find((err, users) => {
      if (err) {
        console.log(err);
      } else {
        res.json(users);
      }
    });
  });
  
  app.post("/create", (req, res) => {
    const user = new User(req.body);
    user
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  });
  
  app.get("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
      res.json(user);
    });
  });
  
  app.post("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
      if (!user) {
        res.status(404).send("User not found");
      } else {
        user.Fname = req.body.Fname;
        user.Mname = req.body.Mname;
        user.Lname = req.body.Lname;
        user.Birthday = req.body.Birthday;
        user.Age = req.body.Age;
        user.EmailAdd = req.body.EmailAdd;
        user.CellNumber = req.body.CellNumber;
        user.Gender = req.body.Gender;
        user.SAddress = req.body.SAddress;
        user.City = req.body.City;
        user.Province = req.body.Province;
        user.zipcode = req.body.zipcode;
        user.country = req.body.country;

  
        user
          .save()
          .then((user) => {
            res.json(user);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});