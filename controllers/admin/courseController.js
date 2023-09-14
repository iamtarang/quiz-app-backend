import COURSE from "../../models/COURSE.js";


export const courseController = {

	getAllCourse: async (req, res, next) => {
		try {
			const courses = await COURSE.findAll()
			res.json(courses)
		} catch (error) {
			res.json(error)
		}
	},

	createCourse: async (req, res, next) => {
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
				return res.send("Record inserted successfully! 🚀");
			}
		} catch (error) {
			return res.json(error);
		}
	},

	updateCourse: async (req, res, next) => {
		try {
			const courses = await COURSE.findByPk(req.params.id);

			if (!courses) {
				return res.send("Course Not Found");
			}
			else {
				await COURSE.update(req.body, {
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

	enableCourse: async (req, res, next) => {
		try {
			const courses = await COURSE.findByPk(req.params.id);

			if (!courses) {
				return res.send("Course Not Found");
			}
			else {
				await COURSE.update({ status: 1 }, {
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

	disableCourse: async (req, res, next) => {
		try {
			const courses = await COURSE.findByPk(req.params.id);

			if (!courses) {
				return res.send("Course Not Found");
			}
			else {
				await COURSE.update({ status: 0 }, {
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

	removeCourse: async (req, res, next) => {
		try {
			const courses = await COURSE.findByPk(req.params.id);

			if (!courses) {
				return res.send("Course Not Found");
			}
			else {
				await COURSE.update({ deleted: 1 }, {
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

	destroyCourse: async (req, res, next) => {
		try {
			const courses = await COURSE.findByPk(req.params.id);

			if (!courses) {
				return res.send("Course Not Found");
			}
			else {
				await COURSE.destroy({
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