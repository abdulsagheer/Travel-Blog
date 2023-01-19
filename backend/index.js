const express = require("express");
const app = express();
require("dotenv").config();
require("./config/connectDb");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server started on port ${port}.`);
});
