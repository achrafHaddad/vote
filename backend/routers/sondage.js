const express = require("express");
const passport = require("passport");
const Sondage = require("../models/sondageSchema");
const User = require("../models/userSchema");

const router = express.Router();

router.post(
  "/create",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    const user = await User.findById(req.user.user);
    const sondage = new Sondage(req.body);

    await sondage.save();

    await Sondage.findByIdAndUpdate(sondage._id, { user: user._id });

    res.send(sondage);
  }
);

//get all sondages
router.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    const sondages = await Sondage.find();

    res.send(sondages);
  }
);

//get sondage by id
router.get(
  "/:id",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    const sondage = await Sondage.findById(req.params.id);

    if (!sondage)
      return res.status(400).json({ message: "sondage n'existe pas" });

    res.send(sondage);
  }
);

// vote
router.put(
  "/vote/:id",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    const vote = await Sondage.findById(req.params.id);

    vote.coice = req.body.choice;
    vote.total += 1;
    if (req.body.choice == "yes") vote.yes += 1;
    else if (req.body.choice == "no") vote.no += 1;

    await vote.save();

    res.send({ message: "vote avec succée" });
  }
);

//edit sondage
router.put(
  "/edit/:id",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    const user = User.findById(req.user.user);
    const sondage = Sondage.findById(req.params.id);
    if (sondage.user !== user._id)
      return res.status(401).json({ message: "Unauthorized" });
    const title = req.body.title;
    const description = req.body.description;

    if (!title || !description)
      return res
        .status(400)
        .json({ message: "vous avez laisser un champs vide" });

    await Sondage.findByIdAndUpdate(req.params.id, {
      title: title,
      description: description,
    });

    res.send({ message: "sondage modifier avec succée" });
  }
);

//delete sondage
router.delete(
  "/delete/:id",
  passport.authenticate("bearer", { session: false }),
  async (req, res) => {
    await Sondage.findByIdAndDelete(req.params.id);

    res.send({ message: "sondage effacer" });
  }
);

module.exports = router;
