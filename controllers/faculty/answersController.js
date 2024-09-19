import { Sequelize } from "sequelize";
import StudentAnswer from "../../models/ANSWERS.js";
import MARKS from "../../models/MARKS.js";
import QUESTION from "../../models/QUESTIONS.js";
import QUIZ from "../../models/QUIZ.js";
import STUDENTS from "../../models/STUDENTS.js";
import SUBJECT from "../../models/SUBJECT.js";

export const answerController = {

	/**
	 * !For Admin Only
	 * */
	getAllAnswers: async (req, res) => {
		try {
			const answer = await StudentAnswer.findAll()

			res.json(answer);

		} catch (error) {
			console.log(error)
			res.json(error)
		}
	},

	/**
	 * !Submitting Student answers
	 */
	submitAnswers: async (req, res) => {
		//? Checking for the correct answer
		try {
			const checkAns = await QUESTION.findAll({
				attributes: ["correct_option", "weightage"],
				where: {
					quiz_id: req.body.quiz_id,
					question_id: req.body.question_id,
				}
			})
			const receivedData = req.body;

			//? Check if the answer is correct
			if (receivedData.chosen_answer === checkAns[0].dataValues.correct_option) {
				//? If true
				receivedData.weightage = checkAns[0].dataValues.weightage;
				receivedData.is_correct = true;

				await StudentAnswer.create(receivedData);
			}
			else {
				//? If false
				receivedData.weightage = checkAns[0].dataValues.weightage;
				receivedData.is_correct = false;

				await StudentAnswer.create(receivedData);
			}
			return res.send({ status: res.status, message: "You answer is submitted!" });
		} catch (error) {
			return res.json(error);
		}
	},

	/**
	 * !Submitting Student Scores
	 */
	endQuiz: async (req, res) => {
		//? Checking for the correct answer
		try {
			const score = await StudentAnswer.findAll({
				attributes: ["student_id", "weightage", "is_correct"],
				where: {
					quiz_id: req.body.quiz_id,
					student_id: req.body.student_id
				}
			})

			//? Calculating the final weightage of the quiz
			let sum = 0;

			for (const obj of score) {
				sum += obj.weightage;
			}

			//? Getting the Student marks according to the weightage
			const studentWeightageMap = new Map();

			for (const answer of score) {
				if (answer.is_correct) {
					const studentId = answer.student_id;
					const weightage = answer.weightage;

					if (studentWeightageMap.has(studentId)) {
						studentWeightageMap.set(studentId, studentWeightageMap.get(studentId) + weightage);
					} else {
						studentWeightageMap.set(studentId, weightage);
					}
				}
			}

			//? Pusing it to an array
			const studentWeightageArray = [];

			for (const [studentId, weightage] of studentWeightageMap) {
				studentWeightageArray.push({ student_id: studentId, quiz_id: req.body.quiz_id, marks_obtained: weightage, total_marks: sum });
			}

			//? Inserting in an database
			await MARKS.create(studentWeightageArray[0]);

			res.status(200).json({ message: "Quiz ended successfully" });

		} catch (error) {
			return res.json(error);
		}
	},

	/**
	 * !Getting Student Scores
	 */
	getScoresForFaculty: async (req, res) => {
		//? Getting correct scores
		try {
			const score = await MARKS.findAll({
				where: {
					quiz_id: req.body.quiz_id
				},
				attributes: ["marks_obtained", "total_marks"],
				include: [
					{
						model: STUDENTS,
						attributes: ["name"]
					},
					{
						model: QUIZ,
						include: [{
							model: SUBJECT,
							attributes: ["subject"]
						}],
						attributes: ["title"]
					}
				]
			});

			res.send(score)

		} catch (error) {
			return res.json(error);
		}
	},

	/**
	 * !Getting Student answers
	 */
	getSubmittedAnswers: async (req, res) => {
		//? Checking for the correct answer
		try {

			const columnComparisons = [
				{ column: 'option_1_text', value: 'correct_option' },
				{ column: 'option_2_text', value: 'correct_option' },
				{ column: 'option_3_text', value: 'correct_option' },
				{ column: 'option_4_text', value: 'correct_option' },
			];

			const whereConditions = columnComparisons.map(({ column, value }) => {
				return Sequelize.literal('?? = ?', [column, value]);
			});

			const answers = await StudentAnswer.findAll({
				where: {
					quiz_id: req.body.quiz_id,
					student_id: req.body.student_id,
				},
				include: [{
					model: QUESTION,
					attributes: ['question_text', 'correct_option'],
					// where: Sequelize.literal('?? = ?', ["correct_option", "chosen_answer"])
				}]
			})

			const mergedData = answers.map(item => {
				return {
					...item,
					question: {
						question_text: item.question.question_text, 
						correct_option: item.question.correct_option
					}
				};
			});
			
			console.log(answers);

			return res.json(answers);
		} catch (error) {
			return res.json(error);
		}
	},

}