import { singleton } from 'tsyringe';
import { IUser, IUserCreation, User } from './user.model';
import logger from '../../../logging/winstonLogger';
import { ApiError } from '../../../middlewares/apiErrors';

@singleton()
export class UsersService {
	/**
	 *  GET USER BY ID
	 * @param userId  uuidv4
	 * @returns {Promise<Iuser>} User
	 */
	async get(userId: string): Promise<IUser> {
		try {
			logger.info(`getting User with id: ${userId}`);
			const user = await User.findByPk(userId);
			if (user) {
				return user;
			}
			throw new Error('User not found!');
		} catch (error: any) {
			logger.error(`Error getting User: ${error.message}`);
			if (error.message === 'User not found!') {
				throw new ApiError({
					statusCode: 404,
					name: 'NotFound',
					message: error.message,
				});
			}
			throw new ApiError({
				statusCode: 500,
				name: 'InternalServerError',
				message: `Opps and error ocurred!`,
			});
		}
	}

	/**
	 * GET ALL USER
	 * @returns {IUser[]}  Users
	 */
	// eslint-disable-next-line class-methods-use-this
	async getAll(): Promise<IUser[]> {
		try {
			const users = await User.findAll();
			return users;
		} catch (error: any) {
			throw new ApiError({
				statusCode: 500,
				name: 'InternalServerError',
				message: `Opps an error ocurred!`,
			});
		}
	}

	/**
	 * CREATE AN USER
	 * @param {IUserCreation} user UserCreationParams
	 * @returns
	 */
	async create(user: IUserCreation): Promise<void> {
		try {
			logger.info(`Creating a new User ${user}`);
			await User.create(user);
		} catch (error: any) {
			logger.error(`Error creating User ${error.message}`);
			throw new ApiError({
				statusCode: 500,
				name: 'InternalServerError',
				message: `Opps an error ocurred`,
			});
		}
	}
}
