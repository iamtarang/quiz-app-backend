import USERS from "../../models/USERS.js";
import bcrypt from "bcrypt"


export const facultyController = {

	getAllFaculty: async (req, res, next) => {
		try {
			const users = await USERS.findAll({
				where: {
					roles: 2,
					status: true,
					deleted: false
				}
			})
			res.json(users)
		} catch (error) {
			res.json(error)
		}
	},

	createFaculty: async (req, res, next) => {
		try {
			const users = await USERS.findAll({
				where: { email: req.body.email }
			});

			if (users.length > 0) {
				return res.json({ message: "User already exists" });
			} else {
				const receivedData = req.body;
				const hashedPassword = await bcrypt.hash(req.body.password, 10);
				receivedData.password = hashedPassword;
				receivedData.roles = 2;
				receivedData.status = true;
				receivedData.deleted = false;

				await USERS.create(receivedData);
				return res.send("Record inserted successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	updateFaculty: async (req, res, next) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.send("User Not Found");
			}
			else {
				await USERS.update(req.body, {
					where: {
						id: req.params.id
					}
				});
				return res.send("Record updated successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	enableFaculty: async (req, res, next) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.send("User Not Found");
			}
			else {
				await USERS.update({ status: 1 }, {
					where: {
						id: req.params.id
					}
				});
				return res.send("Record updated successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	disableFaculty: async (req, res, next) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.send("User Not Found");
			}
			else {
				await USERS.update({ status: 0 }, {
					where: {
						id: req.params.id
					}
				});
				return res.send("Record updated successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	removeFaculty: async (req, res, next) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.send("User Not Found");
			}
			else {
				await USERS.update({ deleted: 1 }, {
					where: {
						id: req.params.id
					}
				});
				return res.send("Record deleted successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	destroyFaculty: async (req, res, next) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.send("User Not Found");
			}
			else {
				await USERS.destroy({
					where: {
						id: req.params.id
					}
				});
				return res.send("Record destroyed successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	}
}