const express = require("express");
const bodyParser = require("body-parser");
const dateFns = require("date-fns");
const app = express();
app.use(bodyParser.json());

/* GLOBAL VARIABLES */

const dispo = {};
const reservations = {};

/* FUNCTIONS */

// generates identification key for reservation
const keyGenerator = () => {
	let result = "";
	let characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // length of 62
	for (let i = 0; i < 12; i++) {
		let index = Math.floor(Math.random() * 62);
		result += characters.charAt(index);
	}
	console.log(`Reservation Key : ${result}`);

	return result;
};

// checks if day is bookable, returns error if true
const isSundayOrPast = (date, res) => {
	let selection = dateFns.parse(date);

	// setting booleans
	let isSunday = dateFns.getDay(selection) === 0;
	let isPast = dateFns.isPast(selection);

	if (isPast) {
		return res
			.status(400)
			.json({ error: "You selected a date in the past, select another" });
	} else if (selection === 7) {
		return res
			.status(400)
			.json({ error: "You selected a Sunday, we are closed then" });
	}
};

// books a slot at the selected date
const reserveSlot = (dispoDate, slot, clientName, res) => {
	if (dispo[dispoDate]["slots"][slot].isAvailable === true) {
		dispo[dispoDate]["slots"][slot].isAvailable = false;
		dispo[dispoDate]["slots"][slot].name = clientName;

		key = keyGenerator();

		reservations[key] = {
			date: dispoDate,
			slots: slot
		};

		return res.json({
			message: "Successfuly booked",
			reservationReference: key
		});
	} else {
		return res.status(400).json({ message: "Slot already booked" });
	}
};

// create a new date for display and slot booking
const createNewDispo = dispoDate => {
	let object = {
		date: dispoDate,
		slots: {
			"1000": { isAvailable: true },
			"1030": { isAvailable: true },
			"1100": { isAvailable: true },
			"1130": { isAvailable: true },
			"1400": { isAvailable: true },
			"1430": { isAvailable: true },
			"1500": { isAvailable: true },
			"1530": { isAvailable: true },
			"1600": { isAvailable: true },
			"1630": { isAvailable: true },
			"1700": { isAvailable: true },
			"1730": { isAvailable: true }
		}
	};
	dispo[dispoDate] = object;
};

/* ROUTES */

// check dispo on specific date, one query (date)
app.get("/visits", (req, res) => {
	if (!req.query.date) {
		res.status(400).json({ error: { message: "No date selected" } });
	} else if (!dispo[req.query.date]) {
		isSundayOrPast(req.query.date, res);
		createNewDispo(req.query.date);
	}
	res.json(dispo[req.query.date]);
});

// books depending on date, slot and name + generates reservation number
app.post("/visits", (req, res) => {
	/* 
	req.body = gets all data passed from the body of the POST requet
	*/
	if (!req.query.date || !req.query.slot || !req.query.name) {
		res.status(400).json({ error: { message: "Missing arguments" } });
	} else {
		isSundayOrPast(req.query.date, res);
		if (!dispo[req.query.date]) {
			createNewDispo(req.query.date);
		}
		reserveSlot(req.query.date, req.query.slot, req.query.name, res);
	}
});

// cancels the reservation based on key
app.post("/cancel", (req, res) => {
	if (!reservations[req.query.key]) {
		return res
			.status(400)
			.json({ error: "Your reservation number is invalid" });
	} else {
		const reservationDate = reservations[req.query.key]["date"];
		const reservationSlot = reservations[req.query.key]["slots"];

		dispo[reservationDate]["slots"][reservationSlot].isAvailable = true;
		delete dispo[reservationDate]["slots"][reservationSlot].name;
		return res.json({ message: "Your reservation has been cancelled" });
	}
});

/* INIT & ERROR HANDLING */

app.listen(3000, () => {
	console.log("Server Started");
});
