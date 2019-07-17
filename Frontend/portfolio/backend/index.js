/* MODULE IMPORTS */

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mailgun = require("mailgun-js");

/* APP SETUP */

app = express();
app.use(bodyParser.json());
app.use(cors());

/* MAILGUN SETUP */

const DOMAIN = "sandbox3193cb2400d547058973461d2557677c.mailgun.org";
const mg = mailgun({
	apiKey: "ee6d199eb001141c0a465e2ec58145e0-fd0269a6-82960892",
	domain: DOMAIN
});

/* ROUTES */

app.post("/submit-form", async (req, res) => {
	const name = req.body.name;
	const mail = req.body.mail;
	const text = req.body.text;
	console.log(req.body);

	const data = {
		from: `${name} <${mail}>`,
		to: "theau.poulat@gmail.com",
		subject: "Contact form - Portfolio",
		text: `${text}`
	};
	mg.messages().send(data, function(error, body) {
		console.log(body);
	});
	console.log("here");
});

/* LISTEN & ERRORs */

app.listen(3000, () => {
	console.log("Server Started");
});
