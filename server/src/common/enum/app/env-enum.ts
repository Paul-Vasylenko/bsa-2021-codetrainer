import { config } from 'dotenv';

config();

const ConfigVariables = process.env;

const {
	APP_PORT,
	SECRET_KEY,
	TYPEORM_CONNECTION,
	TYPEORM_HOST,
	TYPEORM_PORT,
	TYPEORM_USERNAME,
	TYPEORM_PASSWORD,
	TYPEORM_DATABASE,
	TYPEORM_SYNCHRONIZE,
	TYPEORM_LOGGING,
	TYPEORM_MIGRATIONS,
} = ConfigVariables;

const ENV = {
	APP: {
		PORT: APP_PORT,
		API_PATH: '/api',
	},
	JWT: {
		SECRET: SECRET_KEY,
		EXPIRES_IN: '24h',
	},
	DB: {
		DATABASE: TYPEORM_DATABASE,
		USERNAME: TYPEORM_USERNAME,
		PASSWORD: TYPEORM_PASSWORD,
		HOST: TYPEORM_HOST,
		PORT: TYPEORM_PORT,
		DIALECT: TYPEORM_CONNECTION,
		SYNCHRONIZE: TYPEORM_SYNCHRONIZE,
		LOGGING: TYPEORM_LOGGING,
		MIGRATIONS: TYPEORM_MIGRATIONS,
	},
};

export { ENV, ConfigVariables };
