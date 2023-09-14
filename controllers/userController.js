import USERS from "../models/USERS.js"

export const userController = {

	getOneUser: async (req, res) => {
		try {
			const users = await USERS.findOne({
				attributes: ['id', 'name', "roles"],
				where: {
					email: req.body.email
				}
			})
			res.json(users)
		} catch (error) {
			res.json(error)
		}
	},

}