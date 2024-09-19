import COURSE from "../../models/COURSE.js";


export const courseController = {

	getAllCourse: async (req, res) => {
		try {
			const courses = await COURSE.findAll()
			return res.status(200).json({ message: "Success", data: courses });
		} catch (error) {
			res.json(error)
		}
	},

	createCourse: async (req, res) => {
		try {
			const courses = await COURSE.findAll({
				where: { course_name: req.body.course_name }
			});

			if (courses.length > 0) {
				return res.json({ message: "Course already exists" });
			} else {
				const receivedData = req.body;
				receivedData.status = true;
				receivedData.deleted = false;

				await COURSE.create(receivedData);
				return res.status(200).json({ message: "Record inserted successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	},

	updateCourse: async (req, res) => {
		try {
			const courses = await COURSE.findByPk(req.body.id);

			if (!courses) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await COURSE.update(req.body, {
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Record updated successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	},

	enableCourse: async (req, res) => {
		try {
			const courses = await COURSE.findByPk(req.body.id);
			
			if (!courses) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await COURSE.update({ status: 1 }, {
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Record updated successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	},

	disableCourse: async (req, res) => {
		try {
			const courses = await COURSE.findByPk(req.body.id);
			
			if (!courses) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await COURSE.update({ status: 0 }, {
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Record updated successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	},

	removeCourse: async (req, res) => {
		try {
			const courses = await COURSE.findByPk(req.body.id);

			if (!courses) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await COURSE.update({ deleted: 1 }, {
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Record deleted successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	},
	
	destroyCourse: async (req, res) => {
		try {
			const courses = await COURSE.findByPk(req.body.id);
			
			if (!courses) {
				return res.status(404).json({ message: "Record not found" });
			}
			else {
				await COURSE.destroy({
					where: {
						id: req.body.id
					}
				});
				return res.status(200).json({ message: "Record destroyed successfully" });
			}
		} catch (error) {
			return res.json(error);
		}
	}
}