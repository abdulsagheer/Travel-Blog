import User from "../models/User";

export const getAllUsers = async (req, res, next) => {
	try {
		let users = await User.find();
	} catch (error) {
		console.log(error);
	}

	if (!users) {
		return res.status(500).json({ message: "Unexpected error" });
	}
	return res.status(200).json({ users });
};
