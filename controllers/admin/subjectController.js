import SUBJECT from "../../models/SUBJECT.js";

export const subjectController = {

	getAllSubject: async (req, res, next) => {
		try {
			const subjects = await SUBJECT.findAll()
			res.json(subjects)
		} catch (error) {
			res.json(error)
		}
	},

	createSubject: async (req, res, next) => {
		try {
			const receivedData = req.body;
			receivedData.status = true;
			receivedData.deleted = false;

			await SUBJECT.create(receivedData);
			return res.send("Record inserted successfully! 🚀");
		} catch (error) {
			return res.json(error);
		}
	},

	updateSubject: async (req, res, next) => {
		try {
			const subjects = await SUBJECT.findByPk(req.body.id);

			if (!subjects) {
				return res.send("Subject Not Found");
			}
			else {
				await SUBJECT.update(req.body, {
					where: {
						id: req.body.id
					}
				});
				return res.send("Record updated successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	enableSubject: async (req, res, next) => {
		try {
			const subjects = await SUBJECT.findByPk(req.body.id);

			if (!subjects) {
				return res.send("Subject Not Found");
			}
			else {
				await SUBJECT.update({ status: 1 }, {
					where: {
						id: req.body.id
					}
				});
				return res.send("Record updated successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	disableSubject: async (req, res, next) => {
		try {
			const subjects = await SUBJECT.findByPk(req.body.id);

			if (!subjects) {
				return res.send("Subject Not Found");
			}
			else {
				await SUBJECT.update({ status: 0 }, {
					where: {
						id: req.body.id
					}
				});
				return res.send("Record updated successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	removeSubject: async (req, res, next) => {
		try {
			const subjects = await SUBJECT.findByPk(req.body.id);

			if (!subjects) {
				return res.send("Subject Not Found");
			}
			else {
				await SUBJECT.update({ deleted: 1 }, {
					where: {
						id: req.body.id
					}
				});
				return res.send("Record updated successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	destroySubject: async (req, res, next) => {
		try {
			const subjects = await SUBJECT.findByPk(req.body.id);

			if (!subjects) {
				return res.send("Subject Not Found");
			}
			else {
				await SUBJECT.destroy({
					where: {
						id: req.body.id
					}
				});
				return res.send("Record destroyed successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	}
}