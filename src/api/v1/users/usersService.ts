import { singleton } from 'tsyringe';
import { User } from './user';
import logger from '../../../logging/winstonLogger';

// A post request should not contain an id.
export type UserCreationParams = Pick<
	User,
	'firstname' | 'lastname' | 'email' | 'admin'
>;
@singleton()
export class UsersService {
	private placeholder: string;

	constructor() {
		this.placeholder = 'blurgh';
	}

	public get(id: string, email?: string): User {
		this.placeholder = '';
		logger.info(`getting user with id:  ${id}`);
		return {
			id,
			email: email || 'jane@doe.com',
			firstname: 'Jne',
			lastname: 'Doe',
			admin: false,
		};
	}

	public create(userCreationParams: UserCreationParams): User {
		if (this.placeholder !== '') {
			this.placeholder = '';
		}

		return {
			id: Math.floor(Math.random() * 10000).toString(), // Random
			...userCreationParams,
		};
	}
}
