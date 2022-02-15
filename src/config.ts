require('dotenv').config();

interface Config {
	API: {
		PORT: string;
		ENV: string;
	};
	DB: {
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
	},
	DB: {
		PORT: process.env.DB_PORT || '',
		USER: process.env.DB_USER || '',
		PASSWORD: process.env.DB_PASSWORD || '',
	},
	JWT: {
		SECRET: process.env.JWT_SECRET || 'your-jwt-secret',
	},
};
