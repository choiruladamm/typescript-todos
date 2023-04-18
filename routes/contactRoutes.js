const express = require("express");
const router = express.Router();
const { getContact } = require("../controller/contactController");

router.route("/").get(getContact);

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create contact" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = router;
