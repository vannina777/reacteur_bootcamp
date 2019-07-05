/* // mongoose
let mongoose = require("mongoose");

// setup schema and models for interactions
let Schema = mongoose.Schema;

let reservationSchema = new Schema({
	date: String,
	orchestre: Number,
	mezzanine: Number
});

let seats = mongoose.model("seats", reservationSchema);
 */
const displaySeats = date => {};

const createEventInstance = date => {
	const newInstance = new seats(
		{
			date: date,
			orchestre: 1164,
			mezzanine: 824
		},
		function(err, awesome_instance) {
			if (err) return handleError(err);
			// saved!
		}
	);
};

const bookSeat = (date, number) => {};

let exoInstance = {
	date: "2019-02-01",
	orchestre: 1164,
	mezzanine: 824
};

// connecting to the db
/* mongoose.connect("mongodb://127.0.0.1:27017?gssapiServiceName=mongodb", {
	useNewUrlParser: true
});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
	console.log("we're connected!");
});
 */
