import USERS from "../models/USERS.js";
import bcrypt from "bcrypt"
import { config } from 'dotenv';
import jwt from "jsonwebtoken";

config();

const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET

export const loginController = {

	login: async (req, res, next) => {

		try {
			const user = await USERS.findOne({ where: { email: req.body.email } })
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			else {
				bcrypt.compare(req.body.password, user.password, async function (err, data) {
					if (err) {
						res.json(err)
					}
					if (data) {

						const users = await USERS.findAll({
							attributes: ["id", "name", "roles"],
							where: {
								email: req.body.email,
								status: true,
								deleted: false
							}
						})

						if (users) {
							// Create a JWT token
							const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
								expiresIn: '4h', // Token expiration time (optional)
							});

							return res.status(200).json({ message: 'Login successful', token, users });
						}
						else {
							return res.status(404).json({ message: 'User Disabled' });
						}

					} else {
						// response is OutgoingMessage object that server response http request
						return res.status(404).json({ message: 'Incorrect Password' });
					}
				});
			}

		} catch (error) {
			res.json(error)
		}
	},

	studentLogin: async (req, res, next) => {
		try {
			const user = await USERS.findOne({ where: { email: req.body.email } })
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			else {
				bcrypt.compare(req.body.password, user.password, async function (err, data) {
					if (err) {
						res.json(err)
					}
					if (data) {

						const admins = await USERS.findAll({
							attributes: ["id", "name", "roles"],
							where: {
								email: req.body.email,
								status: true,
								deleted: false
							}
						})

						if (admins) {
							// Create a JWT token
							const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
								expiresIn: '4h', // Token expiration time (optional)
							});

							return res.status(200).json({ message: 'Login successful', token });
						}
						else {
							return res.status(404).json({ message: 'User Disabled' });
						}

					} else {
						// response is OutgoingMessage object that server response http request
						return res.status(404).json({ message: 'Incorrect Password' });
					}
				});
			}

		} catch (error) {
			res.json(error)
		}
	},
}
