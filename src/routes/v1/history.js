const express = require("express");
const router = express.Router();
const {
  getAllHistory,
  createHistoryForP,
} = require("../../controllers/v1/history/HistoryController");

router.get("/", getAllHistory);
// TO-DO // add endpoint for posting new history for a patient
//you got it
router.post("/:id", createHistoryForP);
module.exports = router;
