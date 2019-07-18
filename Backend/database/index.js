const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app = express();

// connect to the db
mongoose.connect("mongodb://localhost:27017/student-list", {
	useNewUrlParser: true
});

// define a collection (model)
const Student = mongoose.model("Student", {
	name: String,
	age: Number
});

/* const Message = mongoose.model("Message", {
	message: String,
	sender: String
}); */

/* ROUTES */

// List all students
app.get("/", async (req, res) => {
	try {
		const results = await Student.find({ age: { $gte: 32 } });
		res.json(results);
	} catch (error) {
		res.status(400).json(error.message);
	}
});

// Add student to the db || MAKE IT ASYNC
app.get("/add-student", async (req, res) => {
	console.log("here");
	try {
		// creer une variable de type student
		const newStudent = new Student({
			name: req.query.name,
			age: req.query.age
		});

		// sauve object in db
		await newStudent.save();

		return res.json("Student created");
	} catch (error) {
		console.log(error.message);
	}
});

app.get("/update", async (req, res) => {
	const userId = req.query.userId;
	const age = req.query.age;
	try {
		const student = await Student.findById({ _id: userId });
		student.age = age;
		await student.save();
		res.json("Updated");
	} catch (error) {
		console.log(error.message);
	}
});

app.get("/delete", async (req, res) => {
	const userId = req.query.userId;
	try {
		const student = await Student.findById({ _id: userId });

		await student.remove();
		res.json("Removed");
	} catch (error) {
		console.log(error.message);
	}
});

app.listen(3000, () => {
	console.log("Server Started");
});
