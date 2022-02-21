require('dotenv').config();

interface Config {
	API: {
		PORT: string;
		ENV: string;
		VERSION: string;
	};
	DB: {
		HOST: string;
		NAME: string;
		PORT: string;
		USER: string;
		PASSWORD: string;
	};
	JWT: {
		SECRET: string;
	};
}

export const config: Config = {
	API: {
		PORT: process.env.PORT || '8080',
		ENV: process.env.ENV_LOCAL || 'local',
		VERSION: process.env.VERSION || '1',
	},
	DB: {
		HOST: process.env.DB_HOST || 'localhost',
		NAME: process.env.DB_NAME || 'postgres-db-name',
		PORT: process.env.DB_PORT || '5432',
		USER: process.env.DB_USER || 'admin',
		PASSWORD: process.env.DB_PASS || 'admin',
	},
	JWT: {
		SECRET: process.env.JWT_SECRET || 'your-jwt-secret',
	},
};
