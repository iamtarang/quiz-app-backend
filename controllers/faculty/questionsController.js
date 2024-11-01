import MARKS from "../../models/MARKS.js";
import QUESTION from "../../models/QUESTIONS.js";

export const questionController = {

	getQuestionsStudent: async (req, res) => {
		try {
			const check = await MARKS.findAll({
				where: {
					quiz_id: req.body.quiz_id,
					student_id: req.body.student_id
				}
			})

			if (check[0] == null) {
				const question = await QUESTION.findAll({
					attributes: ["question_id", "question_text", "question_imgfile", "correct_option", "weightage"],
					where: {
						quiz_id: req.body.quiz_id,
						status: true,
						deleted: false
					}
				})

				const options = await QUESTION.findAll({
					attributes: ["question_id", "option_1_text", "option_1_imgfile", "option_2_text", "option_2_imgfile", "option_3_text", "option_3_imgfile", "option_4_text", "option_4_imgfile"],
					where: {
						quiz_id: req.body.quiz_id,
						status: true,
						deleted: false
					}
				})

				function shuffleArray(array) {
					for (let i = array.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[array[i], array[j]] = [array[j], array[i]];
					}
					return array;
				}

				//* Helper function to shuffle an object's key-value pairs
				function shuffleObjectKeys(object) {
					const keys = Object.keys(object);
					const shuffledKeys = shuffleArray(keys);
					const shuffledObject = {};

					for (const key of shuffledKeys) {
						shuffledObject[key] = object[key];
					}

					return shuffledObject;
				}

				//* Shuffle the options for each question
				const shuffledOptions = question.map((q) => {
					const optionsForQuestion = options.filter((opt) => opt.question_id === q.question_id);

					//* Shuffle the key-value pairs inside each option object
					const shuffledOptionsForQuestion = optionsForQuestion.map((opt) =>
						shuffleObjectKeys(opt.toJSON())
					);

					return { ...q.toJSON(), options: shuffledOptionsForQuestion };
				});

				//* Shuffle the questions array
				const shuffledQuestions = shuffleArray(shuffledOptions);

				res.status(200).json(shuffledQuestions);
			}
			else {
				res.status(200).json({ message: "You have already submitted the quiz", check: check })
			}

		} catch (error) {
			res.status(500).json(error)
		}
	},

	// * get all questions
	getQuestionsFaculty: async (req, res) => {
		try {
			const question = await QUESTION.findAll({
				where: {
					quiz_id: req.body.quiz_id,
					status: true,
					deleted: false
				}
			})

			res.json(question);
		} catch (error) {
			console.log(error)
			res.json(error)
		}
	},

	uploadImages: async (req, res) => {

	},

	createQuestions: async (req, res) => {
		try {
			const receivedData = req.body;
			receivedData.status = true;
			receivedData.deleted = false;

			await QUESTION.create(receivedData);
			return res.send("Record inserted successfully! 🚀");
		} catch (error) {
			return res.json(error);
		}
	},

	updateQuestions: async (req, res) => {
		try {
			const question = await QUESTION.findByPk(req.params.id);

			if (!question) {
				return res.send("Questions Not Found");
			}
			else {
				await QUESTION.update(req.body, {
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

	enableQuestions: async (req, res) => {
		try {
			const question = await QUESTION.findByPk(req.params.id);

			if (!question) {
				return res.send("Questions Not Found");
			}
			else {
				await QUESTION.update({ status: 1 }, {
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

	disableQuestions: async (req, res) => {
		try {
			const question = await QUESTION.findByPk(req.params.id);

			if (!question) {
				return res.send("Questions Not Found");
			}
			else {
				await QUESTION.update({ status: 0 }, {
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

	removeQuestions: async (req, res) => {
		try {
			const question = await QUESTION.findByPk(req.params.id);

			if (!question) {
				return res.send("Questions Not Found");
			}
			else {
				await QUESTION.update({ deleted: 1 }, {
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

	destroyQuestions: async (req, res) => {
		try {
			const question = await QUESTION.findByPk(req.params.id);

			if (!question) {
				return res.send("Questions Not Found");
			}
			else {
				await QUESTION.destroy({
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