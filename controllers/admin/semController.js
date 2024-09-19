import SEM from "../../models/SEM.js";

export const semController = {

	getAllSem: async (req, res, next) => {
		try {
			const sems = await SEM.findAll()
			res.json(sems)
		} catch (error) {
			res.json(error)
		}
	},

	createSem: async (req, res, next) => {
		try {
			const receivedData = req.body;
			receivedData.status = true;
			receivedData.deleted = false;

			await SEM.create(receivedData);
			return res.status(200).json({ message: "Record inserted successfully! 🚀" });

		} catch (error) {
			return res.json(error);
		}
	},

	updateSem: async (req, res, next) => {
		try {
			const sems = await SEM.findByPk(req.params.id);

			if (!sems) {
				return res.send("Sem Not Found");
			}
			else {
				await SEM.update(req.body, {
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

	enableSem: async (req, res, next) => {
		try {
			const sems = await SEM.findByPk(req.params.id);

			if (!sems) {
				return res.send("Sem Not Found");
			}
			else {
				await SEM.update({ status: 1 }, {
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

	disableSem: async (req, res, next) => {
		try {
			const sems = await SEM.findByPk(req.params.id);

			if (!sems) {
				return res.send("Sem Not Found");
			}
			else {
				await SEM.update({ status: 0 }, {
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

	removeSem: async (req, res, next) => {
		try {
			const sems = await SEM.findByPk(req.params.id);

			if (!sems) {
				return res.send("Sem Not Found");
			}
			else {
				await SEM.update({ deleted: 1 }, {
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

	destroySem: async (req, res, next) => {
		try {
			const sems = await SEM.findByPk(req.params.id);

			if (!sems) {
				return res.send("Sem Not Found");
			}
			else {
				await SEM.destroy({
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