const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/catalogue-produit", {
	useNewUrlParser: true
});

/* COLLECTION MODULES */

const Department = mongoose.model("Department", {
	title: String
});

const Category = mongoose.model("Category", {
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		maxlength: 150
	},
	department: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Department"
	}
});

const Product = mongoose.model("Product", {
	title: String,
	description: String,
	price: Number,
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category"
	}
});

/* FUNCTIONS */

// --- department routes --- //

// create Department - FULL OK
app.post("/department/create", async (req, res) => {
	const title = req.body.title.toLowerCase();
	const result = new Department({
		title: title
	});

	const filter = await Department.find({ title: title });
	console.log(filter);

	if (filter.length === 0) {
		try {
			await result.save();
			res.json({ message: `You created the ${title} department` });
		} catch (error) {
			res.status(400).json({ error: { message: "Bad Request" } });
		}
	} else {
		res.status(400).json({
			error: {
				message: "You are trying to create a Department that already exists"
			}
		});
	}
});

// read Departments - BASIC OK
app.get("/department", async (req, res) => {
	try {
		const result = await Department.find();
		res.json(result);
	} catch (error) {
		res.status(400).json({
			error: {
				message: "Bad Request"
			}
		});
	}
});

// update Department - FULL OK
app.post("/department/update", async (req, res) => {
	const depId = req.query.id;
	const title = req.body.title.toLowerCase();

	console.log(depId, title);
	try {
		let department = await Department.findById(depId);
		console.log(department);
		department.title = title;
		await department.save();
		res.json("Department updated");
	} catch (error) {
		res.status(400).json({ error: { messge: "Department not found" } });
	}
});

// delete Department and attached products and categories
app.post("/department/delete", async (req, res) => {
	const depId = req.query.id;

	try {
		console.log("Before getting dep");
		const department = await Department.findOne({ _id: depId }).remove();
		console.log(department);
		console.log("before getting matching categories");
		const categories = await Category.find({ department: depId });
		console.log(categories);

		let catIds = [];

		for (let i = 0; i < categories.length; i++) {
			const element = categories[i]._id;

			if (!catIds.includes(element)) {
				catIds.push(element);
			}
		}
		await Category.find({ department: depId }).remove();
		console.log(catIds);
		console.log("Before getting all products with category of THE department");
		await Product.find({ category: { $in: catIds } }).remove();

		/* for (let j = 0; j < products.length; j++) {
			await array[j].remove();
		} */

		res.json("This is the end");

		/* await department.remove( (err, department) => {
			console.log("In the callback");
			const category = await Category.find({
				department: department._id
			});
			console.log(category);
			for (let el of category) {
				let catId = category[el].category;
				const products = await Product.find({ category: catId });
				for (el of products) {
				}
			}
			category.remove(async (err, category) => {});
		}); */
	} catch (error) {}
});

// --- category routes --- //

// create category - FULL OK
app.post("/category/create", async (req, res) => {
	const title = req.body.title.toLowerCase();
	const description = req.body.description;
	const departmentKey = req.body.departmentKey;

	const filterTitle = await Category.find({ title: title });
	console.log(filterTitle[0]);

	const filterId = await Department.find({ _id: departmentKey });
	console.log(filterTitle);

	if (filterId[0] && filterTitle[0]) {
		res
			.status(400)
			.json({ error: { message: "You entered an invalid parameter" } });
	} else {
		const category = new Category({
			title: title,
			description: description,
			department: departmentKey
		});

		try {
			await category.save();
			res.json("You created a new Category");
		} catch (error) {
			res.status(400).json({ error: { message: "Bad Request" } });
		}
	}
});

// read category - FULL OK
app.get("/category", async (req, res) => {
	try {
		const results = await Category.find().populate("department");
		res.json(results);
	} catch (error) {
		res.status(400).json({ error: { message: "Bad Request" } });
	}
});

// update category - FULL OK
app.post("/category/update", async (req, res) => {
	const title = req.body.title.toLowerCase();
	const description = req.body.description;
	const newDepId = req.body.newDepId;
	const categoryId = req.query.id;

	try {
		const element = await Category.findById(categoryId);

		if (title) {
			element.title = title;
		}

		if (description) {
			element.description = description;
		}

		if (newDepId) {
			console.log("before newID");
			element.department = newDepId;
			console.log(" after new ID");
		}
		element.save();
		res.json(element);
	} catch (error) {}
});

// delete category and attached products
app.post("/category/delete", async (req, res) => {
	try {
		const catId = req.query.id;
		const category = await Category.findOne({ _id: catId }).remove();
		const products = await Product.find({ category: catId });
		res.json("Nice delete");
	} catch (error) {
		console.log(error.message);
	}
});

// --- product routes --- //

// create products - FULL OK
app.post("/product/create", async (req, res) => {
	const title = req.body.title.toLowerCase();
	const description = req.body.description;
	const price = req.body.price;
	const category = req.body.category;

	const filterTitle = await Product.findOne({ title: title });
	console.log(filterTitle);

	const filterCategory = await Category.findOne({ _id: category });
	console.log(filterCategory);

	if (!filterTitle && filterCategory) {
		try {
			const product = new Product({
				title: title,
				description: description,
				price: price,
				category: category
			});
			await product.save();
			res.json({
				message: "You successfully created a new product",
				product: product
			});
		} catch (error) {
			res
				.status(400)
				.json({ error: { message: "FAILURE SAVING - DB PROBLEM" } });
		}
	} else {
		res.status(400).json({ error: { message: "Invalid Parameters" } });
	}
});

// read products - FULL OK
app.get("/product", async (req, res) => {
	const category = req.query.category;
	const title = req.query.title; // Regex Builder Needed
	const priceMin = Number(req.query.priceMin);
	const priceMax = Number(req.query.priceMax);
	const sort = req.query.sort;

	const filters = {};

	if (category) {
		// ok
		filters.category = category;
	}
	if (title) {
		// ok
		console.log("I am here");
		regex = new RegExp(title, "i");

		filters["title"] = { $regex: regex, $options: "i" };
		console.log("I am finished here");
	}
	if (priceMin) {
		// ok
		filters.price = { $gte: priceMin };
	}
	if (priceMax) {
		// ok
		filters.price = { $lte: priceMax };
	}

	/*  */

	try {
		let allProducts;
		if (sort) {
			// ok
			if (sort === "price-asc") {
				allProducts = await Product.find(filters)
					.populate("category")
					.sort({ price: 1 });
			} else if (sort === "price-desc") {
				allProducts = await Product.find(filters)
					.populate("category")
					.sort({ price: -1 });
			} else {
				res
					.status(400)
					.json({ error: { message: "Bad input to sort parameter" } });
			}
		} else {
			allProducts = await Product.find(filters).populate("category");
		}

		res.json(allProducts);
	} catch (error) {
		res.status(400).json({ error: { message: "Bad Request" } });
	}
});

// update products - FULL OK
app.post("/product/update", async (req, res) => {
	const title = req.body.title;
	const description = req.body.description;
	const price = req.body.price;
	const newCat = req.body.newCat;

	const product = await Product.findOne({ _id: req.query.id });

	if (product) {
		try {
			if (title) {
				product.title = title;
			}
			if (description) {
				product.description = description;
			}
			if (price) {
				product.price = price;
			}
			if (newCat) {
				product.category = newCat;
			}
			await product.save();
			res.json(product);
		} catch (error) {
			res.status(400).json("Problem here");
		}
	}
});

// delete products - FULL OK
app.post("/product/delete", async (req, res) => {
	const product = await Product.findOne({ _id: req.query.id });
	if (product) {
		await product.remove();
		res.json("Deleted successfully");
	} else {
		res.status(400).json({ error: { message: "Product not found" } });
	}
});

/* ROUTES */

/* REST */

app.listen(3000, () => {
	console.log("Server Started");
});
