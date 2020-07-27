const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./passport");

const user = require("./routers/user");
const sondage = require("./routers/sondage");
const rateLimit = require("./rateLimiter");

mongoose
  .connect("mongodb://localhost/vote", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log("error", err));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(rateLimit);

app.use("/user", user);
app.use("/sondage", sondage);

const port = process.env.PORT || 3000;
app.set("port", port);
app.listen(port);
