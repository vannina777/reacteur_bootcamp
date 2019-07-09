const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/drugstore", {
	useNewUrlParser: true
});

const Drug = mongoose.model("Drug", {
	name: String,
	quantity: Number
});

/* FUNCTIONS */

/* ROUTES */

app.get("/", async (req, res) => {
	// print full inventory
	try {
		const drugs = await Drug.find();
		res.json(drugs);
	} catch (error) {
		console.log(error);
	}
});

app.post("/create", async (req, res) => {
	// create a product in the inventory
	const name = req.body.name;
	const quantity = req.body.quantity;

	try {
		if (Drug.find({ name: name })) {
			res.status(400).json("Drug already exists");
		}
		const newDrug = new Drug({
			name: name.toUpperCase(),
			quantity: quantity
		});

		await newDrug.save();
		res.json("Drug added successfully");
	} catch (error) {
		console.log(error.message);
	}
});

app.post("/drugs/add", async (req, res) => {
	// update a product in the existing inventory
	const drugId = req.body.drugId;
	const toAdd = req.body.toAdd;

	try {
		let drug = Drug.findById(drugId);
		if (drug) {
			drug.quantity += toAdd;
			await drug.save();
			res.json("Quantity Updated");
		}
	} catch (error) {}
});
app.post("/drugs/remove", async (req, res) => {
	// update a product in the existing inventory
	const drugId = req.body.drugId;
	const toRemove = req.body.toRemove;

	try {
		let drug = Drug.findById(drugId);
		if (toRemove > drug.quantity) {
			res.status(400).json("Invalid Quantity");
		}
		if (drug) {
			drug.quantity -= toRemove;
			await drug.save();
			res.json("Quantity Updated");
		}
	} catch (error) {}
});

app.post("/delete", async (req, res) => {
	// rdelete a product in the existing inventory
	const drugId = req.body.drugId;
	try {
		drug = Drug.findById(drugId);
		await drug.remove();
		res.json("Drug deleted");
	} catch (error) {}
});

/* REST */

app.listen(3000, () => {
	console.log("Server Started");
});
