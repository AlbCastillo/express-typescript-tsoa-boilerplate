import { Sequelize } from 'sequelize-typescript';

import { config } from './config';
import logger from './logging/winstonLogger';

const apiVersion: string = config.API.VERSION;
const modelsRoute: string = `${__dirname}/api/v${apiVersion}/**/*.model.ts`;

const sequelizeConnection: Sequelize = new Sequelize({
	database: config.DB.NAME,
	dialect: 'postgres',
	username: config.DB.USER,
	password: config.DB.PASSWORD,
	models: [modelsRoute],
	modelMatch: (filename, member) => {
		return (
			filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
		);
	},
});

export async function checkSequelizeConnection(): Promise<any> {
	try {
		await sequelizeConnection.authenticate();
		logger.info('Connected to database');
	} catch (err) {
		logger.error('Unable to connect to database');
	}
}
