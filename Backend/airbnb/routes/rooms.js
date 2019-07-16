const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
router.use(bodyParser.json());
const mongoose = require("mongoose");

/* MODELS */

const models = require("../schema.js");

const Room = models.room;

/* ROUTES */

router.get("/", (req, res) => {
	res.send("Hello, this working !");
});

// publish a new room
router.post("/api/room/publish", async (req, res) => {
	const title = req.body.title;
	const description = req.body.description;
	const photos = req.body.photos;
	const price = req.body.price;
	const city = req.body.city;
	const loc = req.body.loc;

	const newRoom = new Room({
		title: title,
		description: description,
		photos: photos,
		price: price,
		city: city,
		loc: loc,
		ratingValue: null,
		review: 0
	});

	await newRoom.save();
	res.send(newRoom);
});

// check a room depending on ID
router.get("/api/room/:id", async (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(400).json({ error: { mesage: "No Id inputeedx" } });
	}
	try {
		const selectedRoom = await Room.findOne({ _id: id });
	} catch (error) {
		res.status(400).json({ error: { mesage: "Invalid Id" } });
	}
	console.log(selectedRoom);
	res.json(selectedRoom);
});

// search room on geo-base
router.get("/api/rooms", async (req, res) => {
	const city = req.query.city;

	try {
		const search = await Room.find({ city: city });
		const count = search.length;
		res.json({ rooms: search, count: count });
	} catch (error) {
		res.status(400).json({ error: { message: "Bad Request" } });
	}
});

module.exports = router;
