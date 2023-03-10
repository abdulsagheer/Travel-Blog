const express = require("express");
const app = express();
require("dotenv").config();
require("./config/connectDb");
const cors = require("cors");
const router = require("./router/userRoute");
const blogRouter = require("./router/blogRoute");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server started on port ${port}.`);
});
