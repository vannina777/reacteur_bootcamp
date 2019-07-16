const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");

const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

router.use(bodyParser.json());
const mongoose = require("mongoose");

/* MODELS */

const models = require("../schema.js");

const User = models.user;

/* ROUTES */

router.get("/api/user", (req, res) => {
	res.send("Hello, this working !");
});

// create an account
router.post("/api/user/sign-up", async (req, res) => {
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	const biography = req.body.biography;

	const token = uid2(16);
	const salt = uid2(16);

	const hash = SHA256(password + salt).toString(encBase64);

	const newUser = new User({
		account: {
			username: username,
			biography: biography
		},
		email: email,
		token: token,
		hash: hash,
		salt: salt
	});
	await newUser.save();
	res.json(newUser);
});

// user login with renewed token
router.post("/api/user/log-in", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	let user = await User.findOne({ email: email });
	const salt = user.salt;
	const hash = user.hash;

	const passwordCorrect = SHA256(password + salt).toString(encBase64) === hash;

	// need to not display hash and token
	if (passwordCorrect) {
		user.token = uid2(16);
		await user.save();
		let userObj = user.toObject();

		delete userObj.salt;
		delete userObj.hash;
		res.json(userObj);
	} else {
		res
			.status(400)
			.json({ error: { message: "You entered a wrong password" } });
	}
	console.log(salt, hash);
});

// get user information if correct token
router.get("/api/user/:id", async (req, res) => {
	const token = req.headers.authorization.split(" ")[1];
	const id = req.params.id;

	console.log(typeof token, id);

	const tokenFinder = await User.findOne({ token: token });

	console.log(tokenFinder);

	if (tokenFinder) {
		const user = await User.findOne({ _id: id }, "account");
		if (user) {
			res.json(user);
		} else {
			res.status(400).json({ error: { message: "Invalid ID" } });
		}
	} else {
		res.status(401).json({ error: { message: "Invalid Token" } });
	}
});

module.exports = router;
