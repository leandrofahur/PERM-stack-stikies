const express = require("express");
const Note = require("../models/Note");
const router = express.Router();
const noteController = require("../controllers/noteController");

/*
 * @route:          GET /notes/all
 * @description:    Retrieve all notes
 * @access:         Public
 */
router.get("/all", noteController.fetchAll);

/*
 * @route:          GET /notes/:id
 * @description:    Retrieve a note by its id
 * @access:         Public
 */
router.get("/:id", noteController.fetchById);

/*
 * @route:          POST /notes
 * @description:    Create a note
 * @access:         Public
 */
router.post("/", noteController.addNote);

/*
 * @route:          PUT /notes/:id
 * @description:    Update a note
 * @access:         Public
 */
router.put("/:id", noteController.updateNote);

/*
 * @route:          DELETE /notes/all
 * @description:    Delete all notes
 * @access:         Public
 */
router.delete("/all", noteController.deleteAll);

/*
 * @route:          DELETE /notes/:id
 * @description:    Delete notes by id
 * @access:         Public
 */
router.delete("/:id", noteController.deleteById);

module.exports = router;
