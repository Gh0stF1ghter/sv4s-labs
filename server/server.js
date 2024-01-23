const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const fs = require("fs");

app.listen(3001, () => console.log("connected to localhost:3001"));

app.use(bodyParser.json());
app.use(cors());

app.get("/cameras", async (req, res) => {
  try {
    console.log("start");
    const camerasBuffer = fs.readFileSync("./constants/cameras.json");
    console.log("json cameras");
    console.log(camerasBuffer);

    const cameras = JSON.parse(camerasBuffer);
    console.log("parsed cameras");
    console.log(cameras);

    res.status(200).send({ success: true, cameras });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});

app.get("/doorSec", async (req, res) => {
  try {
    const doorSecBuffer = fs.readFileSync("./constants/doorSec.json");
    const doorSec = JSON.parse(doorSecBuffer);

    res.status(200).send({ success: true, doorSec });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});

app.get("/entranceSec", async (req, res) => {
  try {
    const entranceSecBuffer = fs.readFileSync("./constants/entranceSec.json");
    const entranceSec = JSON.parse(entranceSecBuffer);
    res.status(200).send({ success: true, entranceSec });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const usersBuffer = fs.readFileSync("./constants/profiles.json");
    const users = JSON.parse(usersBuffer);

    const user = users.find(
      (x) => x.email === email && x.password === password
    );
    if (!user) {
      res.status(404).send({ message: "User Not Found", success: false });
    }
    res
      .status(200)
      .send({ message: "Successfully logged in", success: true, user });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !password || !name)
      res.send(400).status({ message: "Enter credentials", success: false });

    const usersBuffer = fs.readFileSync("./constants/profiles.json");
    const users = JSON.parse(usersBuffer);

    const user = users.find((x) => x.email === email);
    if (user) {
      res.status(400).send({ message: "User already exists", success: false });
    }
    const newUser = { email, name, password };

    users.push(newUser);

    fs.writeFileSync("./constants/profiles.json", users, "utf-8", (err) => {
      if (err) throw err;
      console.log("user added");
    });

    res
      .status(200)
      .send({ message: "Successfully registered", success: true, newUser });
  } catch (error) {
    res.status(500).send({ message: "smth went wrong", success: false, error });
  }
});
