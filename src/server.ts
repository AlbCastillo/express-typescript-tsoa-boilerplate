import { config } from './config';
import app from './app';
import logger from './logging/winstonLogger';

const port = config.API.PORT;

/**
 * SERVER RUNNING ON
 */
const server = app.listen(port, () => {
	logger.debug(`APP LISTENING AT http://localhost:${port}`);
});

export default server;
