import QUIZ from "../../models/QUIZ.js";


export const quizController = {

	//! For Admin
	getAllQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findAll({
				where: {
					deleted: false
				}
			})
			res.json(quiz)
		} catch (error) {
			res.json(error)
		}
	},

	//!For Faculty Panel
	getAllFacultyQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findAll({
				where: {
					creator_id: req.params.id,
					status: true,
					deleted: false
				}
			})
			res.json(quiz)
		} catch (error) {
			res.json(error)
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
			res.json(quiz)
		} catch (error) {
			res.json(error)
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
			res.json(quiz)
		} catch (error) {
			res.json(error)
		}
	},

	createQuiz: async (req, res) => {
		try {
			const receivedData = req.body;
			receivedData.status = true;
			receivedData.deleted = false;

			await QUIZ.create(receivedData);
			return res.send("Quiz created successfully! 🚀");
		} catch (error) {
			return res.json(error);
		}
	},

	updateQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.params.id);

			if (!quiz) {
				return res.send("Quiz Not Found");
			}
			else {
				await QUIZ.update(req.body, {
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

	enableQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.params.id);

			if (!quiz) {
				return res.send("Quiz Not Found");
			}
			else {
				await QUIZ.update({ status: 1 }, {
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

	disableQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.params.id);

			if (!quiz) {
				return res.send("Quiz Not Found");
			}
			else {
				await QUIZ.update({ status: 0 }, {
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

	removeQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.params.id);

			if (!quiz) {
				return res.send("Quiz Not Found");
			}
			else {
				await QUIZ.update({ deleted: 1 }, {
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

	destroyQuiz: async (req, res) => {
		try {
			const quiz = await QUIZ.findByPk(req.params.id);

			if (!quiz) {
				return res.send("Quiz Not Found");
			}
			else {
				await QUIZ.destroy({
					where: {
						id: req.params.id
					}
				});
				return res.send("Record destroyed successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	/**
	 * Function to store answers and calculate result
	 * @param {*} req Request Object
	 * @param {*} res Response Object
	 */
	saveAnswers: async (req, res) => {

		// Validate Request data

		// Check if quiz exist

		// Loop out answers and store in database

		// Check if question exist

		// Calculate result

		// Save Result to database

		// Send Response

	}
}