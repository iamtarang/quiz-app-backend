import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config(); 
// Example for postgres
export const sequelize = new Sequelize(process.env.CON) 

export const connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}
