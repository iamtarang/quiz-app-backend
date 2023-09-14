// middleware/auth.js
import pkg from 'jsonwebtoken';
import { config } from 'dotenv';
import USERS from '../../models/USERS.js';

config();

const { verify } = pkg;
const SECRET_KEY = process.env.SECRET; // Same secret key used in app.js

export let userRole = null

const authenticateToken = (req, res, next) => {
	const token = req.header('token');
console.log(token);
	if (!token) {
		return res.status(401).json({ message: 'Unauthorized: No token provided' });
	}

	verify(token, SECRET_KEY, async (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: 'Unauthorized: Invalid token' });
		}

		try {
			const user = await USERS.findByPk(decoded.id);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}

			// Add the user object to the request for further use
			req.user = user;
			userRole = user.dataValues
			next();
		} catch (error) {
			console.error('Error during authentication:', error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	});
};

export default authenticateToken
