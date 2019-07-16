const mongoose = require("mongoose");

const Room = mongoose.model("Room", {
	title: String,
	description: String,
	photos: [String],
	price: Number,
	ratingValue: {
		type: Number,
		default: null
	},
	reviews: {
		type: Number,
		default: 0
	},
	city: String,
	loc: {
		type: [Number], // Longitude et latitude
		index: "2dsphere" // Créer un index geospatial https://docs.mongodb.com/manual/core/2dsphere/
	}
});

const User = mongoose.model("User", {
	account: {
		username: String,
		biography: String
	},
	email: String,
	token: String,
	hash: String,
	salt: String
});

module.exports = {
	room: Room,
	user: User
};
