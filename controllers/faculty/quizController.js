import COURSE from "../../models/COURSE.js";
import QUIZ from "../../models/QUIZ.js";
import SEM from "../../models/SEM.js";
import SUBJECT from "../../models/SUBJECT.js";


export const quizController = {

	//! For Admin
	getAllQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findAll({
				where: {
					deleted: false
				}
			})
			res.status(200).json({ quiz })
		} catch (error) {
			return res.status(500).json({ error: error, message: "Internal Server error" })
		}
	},

	//!For Faculty Panel
	getFacultyQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findAll({
				where: {
					creator_id: req.body.id,
					status: true,
					deleted: false
				},
				include: [
					{
						model: COURSE,
						attributes: ['course_name']
					},
					{
						model: SEM,
						attributes: ['semester']
					},
					{
						model: SUBJECT,
						attributes: ['subject']
					}
				]
			});
			res.json(quiz);
		} catch (error) {
			return res.status(500).json({ error: error.message, message: "Internal Server Error" });
		}
	},	

	getActiveQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findAll({
				where: {
					creator_id: req.body.id,
					status: true,
					deleted: false
				}
			})
			res.status(200).json({ quiz })
		} catch (error) {
			return res.status(500).json({ error: error, message: "Internal Server error" })
		}
	},

	getInactiveQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findAll({
				where: {
					creator_id: req.body.id,
					status: false,
					deleted: false
				}
			})
			res.status(200).json({ quiz })
		} catch (error) {
			return res.status(500).json({ error: error, message: "Internal Server error" })
		}
	},

	createQuiz: async (req, res) => {
		try {
			const receivedData = req.body;
			receivedData.status = true;
			receivedData.deleted = false;

			await QUIZ.create(receivedData);
			res.status(200).json({ message: "Quiz created successfully! 🚀" })
		} catch (error) {
			return res.status(500).json({ error: error, message: "Internal Server error" })
		}
	},

	updateQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.body.id);

			if (!quiz) {
				return res.status(404).json({ message: "Quiz not found" })
			}
			else {
				await QUIZ.update(req.body, {
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Quiz updated successfully! 🚀" })
			}
		} catch (error) {
			return res.status(500).json({ error: error, message: "Internal Server error" })
		}
	},

	enableQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.body.id);

			if (!quiz) {
				return res.status(404).json({ message: "Quiz not found" })
			}
			else {
				await QUIZ.update({ status: 1 }, {
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Quiz updated successfully! 🚀" })
			}
		} catch (error) {
			return res.status(500).json({ error: error, message: "Internal Server error" })
		}
	},

	disableQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.body.id);

			if (!quiz) {
				return res.status(404).json({ message: "Quiz not found" })
			}
			else {
				await QUIZ.update({ status: 0 }, {
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Quiz updated successfully! 🚀" })
			}
		} catch (error) {
			return res.status(500).json({ error: error, message: "Internal Server error" })
		}
	},

	removeQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.body.id);

			if (!quiz) {
				return res.status(404).json({ message: "Quiz not found" })
			}
			else {
				await QUIZ.update({ deleted: 1 }, {
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Quiz deleted successfully! 🚀" })
			}
		} catch (error) {
			return res.status(500).json({ error: error, message: "Internal Server error" })
		}
	},

	destroyQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.body.id);

			if (!quiz) {
				return res.status(404).json({ message: "Quiz not found" })
			}
			else {
				await QUIZ.destroy({
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Quiz destroyed successfully! 🚀" })
			}
		} catch (error) {
			return res.status(500).json({ error: error, message: "Internal Server error" })
		}
	}

}