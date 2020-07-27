const express = require("express");
const passport = require("../passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const router = express.Router();

router.post("/register", async (req, res) => {
  const user = new User(req.body);

  const uniqueEmail = await User.findOne({ email: req.body.email });
  if (uniqueEmail)
    return res.status(400).json({ message: "email already in use" });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  res.send(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) res.status(400).json({ message: "wrong email or password" });

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json("wrong email or password");

  let token = jwt.sign(
    {
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    },
    "secret"
  );

  res.send({ token: token });
});

module.exports = router;
