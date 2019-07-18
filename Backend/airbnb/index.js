const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/airbnb", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);

/* SCHEMAS */

/* ROUTES */

const roomRoutes = require("./routes/rooms.js");
app.use(roomRoutes);

const userRoutes = require("./routes/users.js");
app.use(userRoutes);

/* REST */

app.all("*", (req, res) => {
	res.status(404).json({ error: { message: "ERROR 404 - PAGE NOT FOUND" } });
});

app.listen(3000, () => {
	console.log("Server Started");
});
