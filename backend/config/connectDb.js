const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.set("strictQuery", true);
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Database connected ✅..."))
	.catch((err) => console.log(err));
