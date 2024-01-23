const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./schemas/profileSchema");
const Camera = require("./schemas/cameraSchema");
const DoorSec = require("./schemas/doorSecSchema");
const EntranceSec = require("./schemas/entranceSecSchema");

const MONGODB_URI =
  "mongodb+srv://mrnorm100:gMPy2hbolJMWG3Xs@cluster0.7qryezc.mongodb.net/?retryWrites=true&w=majority";

const app = express();
const fs = require("fs");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3001, () => console.log("connected to localhost:3001"));
  })
  .catch((error) => console.log("Mongodb error " + error));

app.use(bodyParser.json());
app.use(cors());

app.get("/cameras", async (req, res) => {
  try {
    const cameras = await Camera.find();

    res.status(200).send({ success: true, cameras });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});

app.get("/doorSec", async (req, res) => {
  try {
    const doorSec = await DoorSec.find();

    res.status(200).send({ success: true, doorSec });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});

app.get("/entranceSec", async (req, res) => {
  try {
    const entranceSec = await EntranceSec.find();
    res.status(200).send({ success: true, entranceSec });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      res
        .status(400)
        .send({ message: "incorrect credentials", success: false });

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass)
      res
        .status(400)
        .send({ message: "incorrect credentials", success: false });

    const token = jwt.sign({
      id: user.id,
      email: user.email,
      password: user.password,
    });

    res
      .status(200)
      .send({ message: "Successfully logged in", success: true, user, token });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !password || !name)
      res.send(400).status({ message: "Enter credentials", success: false });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).send({ message: "User already exists", success: false });
    }

    const newUser = new User({ email, name, password: passwordHash });
    await newUser.save();

    res
      .status(200)
      .send({ message: "Successfully registered", success: true, newUser });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});
