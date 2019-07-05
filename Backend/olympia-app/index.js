const express = require("express");
const axios = require("axios");
const app = express();
const dateFns = require("date-fns");

let dates = {
	"2019-02-01": {
		date: "2019-02-01",
		orchestre: 1164,
		mezzanine: 824
	}
};

/* FUNCTIONS */

const bookNSeats = (n, category, date) => {
	dates[date][category] -= n;
};
const createNewDate = date => {
	dates[date] = {
		date: date,
		orchestre: 1164,
		mezzanine: 824
	};
};

const isDateBefore = date => {
	let dateArr = dateFns.format(dateFns.parse(date), "YYYY-MM-DD");
	return dateFns.isPast(dateArr);
};

/* ROUTES */

app.get("/", (req, res) => {
	res.send(seats.find);
});

// check availabilities
app.get("/availabilities", (req, res) => {
	/* request date
     date format = YYYY-MM-DD
     */
	let before = isDateBefore(req.query.date);

	if (before === true) {
		console.log("error on date");
		res.json({
			message: "You selected a passed date, please select today or days to come"
		});
	} else {
		if (dates[req.query.date] === undefined) {
			createNewDate(req.query.date);
			res.json(dates[req.query.date]);
		} else {
			res.json(dates[req.query.date]);
		}
	}
});

// book seats
app.get("/book", (req, res) => {
	/* 
    date format = YYYY-MM-DD
	seats format = 1 <= x <= 4 */
	let before = isDateBefore(req.query.date);

	if (before === true) {
		res.json({
			message: "You selected a passed date, please select today or days to come"
		});
	} else {
		if (dates[req.query.date] === undefined) {
			createNewDate(req.query.date);
			console.log("here");
		}

		if (
			(req.query.category === "orchestre" ||
				req.query.category === "mezzanine") &&
			req.query.seats > 0
		) {
			if (dates[req.query.date][req.query.category] > 0) {
				bookNSeats(req.query.seats, req.query.category, req.query.date);
				console.log("here2");
				res.json({ message: `${req.query.seats} successfully booked` });
			} else {
				res.json({ error: { message: "Not enough available seats" } });
			}
		} else {
			console.log("here3");
			res
				.status(400)
				.json({ error: { message: "Invalid request", status: this.status } });
		}
	}
});

app.listen(3000, () => {
	console.log("Server has started");
});
