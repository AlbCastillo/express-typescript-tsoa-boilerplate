import { config } from './config';
import app from './app';
import logger from './logging/winstonLogger';
import { checkSequelizeConnection } from './sequelize';

const port = config.API.PORT;

/**
 * CHECK DATABASE CONNECTION
 */
checkSequelizeConnection();

/**
 * SERVER RUNNING ON
 */
const server = app.listen(port, () => {
	logger.debug(`APP LISTENING AT http://localhost:${port}`);
});

export default server;
