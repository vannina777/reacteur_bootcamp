const express = require("express");
const axios = require("axios");
const app = express();
const dateFns = require("date-fns");

let dates = {
	"2019-09-01": {
		date: "2019-02-01",
		orchestre: 1164,
		mezzanine: 0 // 824
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

	console.log(req.query.seats, req.query.category, req.query.date);

	let isEmpty =
		req.query.seats === "undefined" ||
		req.query.category === "undefined" ||
		req.query.date === "undefined";

	console.log(isEmpty);
	if (isEmpty === true) {
		console.log("I am true");
		//res.status(400);
		return res.status(400).json({ error: "Missing Input" });
		//return res.send(res.statusCode);

		//throw new Error("Input Missing");
		// .json("Missing input");
	}

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
		}
	}
});

app.listen(3000, () => {
	console.log("Server has started");
});

/* Hello,

I am building a cli client for an api. On my Express server, I set up this logic to capture an error and send back a message to the user.

    app.get("/book", (req, res) => {

	  console.log(req.query.seats, req.query.category, req.query.date);

	  let isEmpty =
		req.query.seats === "undefined" ||
		req.query.category === "undefined" ||
		req.query.date === "undefined";

	  console.log(isEmpty);
	  if (isEmpty === true) {
		console.log("I am true");
		res.status(400).send("Input Missing");
		
	}

     // code continues
    }

the `res.status(400).send("Input Missing")` doesn't seem to work as it sends back undefined to the user.

Is there a problem with the syntax ? Is the behavior normal ? 

Thanks ! */
