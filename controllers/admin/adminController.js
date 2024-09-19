import USERS from "../../models/USERS.js";
import bcrypt from "bcrypt"


export const adminController = {

	/* */
	getAllAdmin: async (req, res) => {
		try {
			const admins = await USERS.findAll({
				where: {
					roles: 1,
					status: true,
					deleted: false
				}
			})
			return res.status(200).json({ message: "success", data: admins });
		} catch (error) {
			return res.json(error)
		}
	},

	createAdmin: async (req, res) => {
		try {
			const receivedData = req.body;
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			receivedData.password = hashedPassword;
			receivedData.roles = 1;
			receivedData.status = true;
			receivedData.deleted = false;

			await USERS.create(receivedData);
			return res.status(200).json({ message: "User created successfully" });
		} catch (error) {
			return res.json(error);
		}
	},

	updateAdmin: async (req, res) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await USERS.update(req.body, {
					where: {
						id: req.params.id
					}
				});
				return res.status(200).json({ message: "Record updated successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	},

	enableAdmin: async (req, res) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await USERS.update({ status: 1 }, {
					where: {
						id: req.params.id
					}
				});
				return res.status(200).json({ message: "Record updated successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	},

	disableAdmin: async (req, res) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await USERS.update({ status: 0 }, {
					where: {
						id: req.params.id
					}
				});
				return res.status(200).json({ message: "Record updated successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	},

	deleteAdmin: async (req, res) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await USERS.update({ deleted: 1 }, {
					where: {
						id: req.params.id
					}
				});
				return res.status(200).json({ message: "Record deleted successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	},

	destroyAdmin: async (req, res) => {
		try {
			const users = await USERS.findByPk(req.params.id);

			if (!users) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await USERS.destroy({
					where: {
						id: req.params.id
					}
				});
				return res.status(200).json({ message: "Record destroyed successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	}
}