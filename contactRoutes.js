const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

router.post("/", (req, res) => {
  res.send("Create contact");
});

router.get("/:id", (req, res) => {
  res.send("Get contact by ID");
});

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;