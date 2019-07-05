const express = require("express");
const app = express();

app.get("/:name", (req, res) => {
	res.send(`Hello ${req.params.name} from ${req.query.city}`);
});

app.get("/hello", (req, res) => {
	res.send("Hello");
});

app.get("/bonjour", (req, res) => {
	res.send("Bonjour");
});

app.all("*", (req, res) => {
	res.send("all routes");
});

app.listen(3000, () => {
	console.log("Server has started");
});
