import STUDENTS from "../../models/STUDENTS.js";

const students = null;

export const studentsController = {

	getStudentId: async (req, res) => {
		try {
			students = req.body.id
		} catch (error) {
			res.json(error)
		}
	},

	getAllStudents: async (req, res) => {
		try {
			const students = await STUDENTS.findAll({
				where: {
					status: true,
					deleted: false
				}
			})
			res.json(students)
		} catch (error) {
			res.json(error)
		}
	},

	createStudents: async (req, res) => {
		try {
			const arrayOfObjects = req.body.student_data

			const updatedArrayOfObjects = arrayOfObjects.map(obj => {
				const student_id = `${req.body.prefix}${obj.roll_no}`;
				const status = true;
				const deleted = false;
				return { ...obj, student_id, status, deleted };
			});

			await STUDENTS.bulkCreate(updatedArrayOfObjects);			
			return res.send("Record inserted successfully! 🚀");
		} catch (error) {
			return res.json(error);
		}
	},

	updateStudents: async (req, res) => {
		try {
			const students = await STUDENTS.findByPk(req.params.id);

			if (!students) {
				return res.send("Student Not Found");
			}
			else {
				await STUDENTS.update(req.body, {
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

	enableStudents: async (req, res) => {
		try {
			const students = await STUDENTS.findByPk(req.params.id);

			if (!students) {
				return res.send("Student Not Found");
			}
			else {
				await STUDENTS.update({ status: 1 }, {
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

	disableStudents: async (req, res) => {
		try {
			const students = await STUDENTS.findByPk(req.params.id);

			if (!students) {
				return res.send("Student Not Found");
			}
			else {
				await STUDENTS.update({ status: 0 }, {
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

	removeStudents: async (req, res) => {
		try {
			const students = await STUDENTS.findByPk(req.params.id);

			if (!students) {
				return res.send("Student Not Found");
			}
			else {
				await STUDENTS.update({ deleted: 1 }, {
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

	destroyStudents: async (req, res) => {
		try {
			const students = await STUDENTS.findByPk(req.params.id);

			if (!students) {
				return res.send("Student Not Found");
			}
			else {
				await STUDENTS.destroy({
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