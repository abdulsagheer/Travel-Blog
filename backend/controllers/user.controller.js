const User = require("../models/User");

export const getAllUsers = async (req, res, next) => {
	let users;
	try {
		users = await User.find();
	} catch (error) {
		console.log(error);
	}

	if (!users) {
		return res.status(500).json({ message: "Unexpected error" });
	}
	return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {};

export const login = async (req, res, next) => {};
