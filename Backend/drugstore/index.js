const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dateFns = require("date-fns");

let app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/drugstore", {
	useNewUrlParser: true
});

/* COLLECTION MODELS */

const Drug = mongoose.model("Drug", {
	name: String,
	quantity: Number
});

const Log = mongoose.model("Log", {
	date: String,
	action: String,
	params: Object
});

/* FUNCTIONS */

const logEvent = async req => {
	console.log("Init Logger");
	const eventDate = dateFns.format(new Date(), "YYYY-MM-DD, HH:mm:ss");
	const route = req.route.path;
	const params = req.body;

	try {
		const newLog = new Log({
			date: eventDate,
			action: route,
			params: params
		});

		console.log(newLog);
		await newLog.save();
	} catch (error) {
		console.log(error.message);
	}
};

/* ROUTES */

// get all drugs
app.get("/", async (req, res) => {
	// print full inventory

	try {
		const drugs = await Drug.find();
		res.json(drugs);
	} catch (error) {
		res.json(error.message);
	}
});

// create a drug entry
app.post("/create", async (req, res) => {
	// create a product in the inventory
	const drugName = req.body.name.toUpperCase();
	const quantity = req.body.quantity;

	//console.log(req);

	try {
		let drug = await Drug.findOne({ name: drugName });
		console.log(drug);
		if (drug) {
			res.status(400).json("Drug already exists");
		} else {
			const newDrug = new Drug({
				name: drugName,
				quantity: quantity
			});

			await newDrug.save();
			logEvent(req);
			res.json("Drug added successfully");
		}
	} catch (error) {
		console.log(error.message);
	}
});

// display a specific drug by name
app.get("/drugs", async (req, res) => {
	const name = req.query.name.toUpperCase();

	try {
		const drug = await Drug.findOne({ name: name });
		res.json(drug);
	} catch (error) {
		console.log(error.message);
	}
});

// add quantity to a drug
app.post("/drugs/add", async (req, res) => {
	// update a product in the existing inventory
	const drugId = req.body.drugId;
	const toAdd = req.body.toAdd;

	try {
		let drug = Drug.findById(drugId);
		if (drug) {
			drug.quantity += toAdd;
			await drug.save();
			logEvent(req);
			res.json("Quantity Updated");
		}
	} catch (error) {}
});

// remove quantity to a drug
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
			logEvent(req);
			res.json("Quantity Updated");
		}
	} catch (error) {}
});

// delete a drug
app.post("/delete", async (req, res) => {
	// rdelete a product in the existing inventory
	const drugId = req.body.drugId;
	console.log(drugId);
	try {
		console.log(1);
		let drug = await Drug.findById(drugId);

		await drug.remove();
		logEvent(req);
		res.json("Drug deleted");
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

/* REST */

app.listen(3000, () => {
	console.log("Server Started");
});
