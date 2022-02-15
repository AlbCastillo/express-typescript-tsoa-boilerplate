import { injectable } from 'tsyringe';
import {
	Body,
	Controller,
	Get,
	Path,
	Post,
	Query,
	Route,
	SuccessResponse,
} from 'tsoa';
import { User } from './user';
import { UsersService, UserCreationParams } from './usersService';

@injectable()
@Route('v1/users')
// eslint-disable-next-line import/prefer-default-export
export class UsersController extends Controller {
	constructor(private usersService: UsersService) {
		super();
	}

	@Get('{userId}')
	public async getUser(
		@Path() userId: string,
		@Query() email?: string,
	): Promise<User> {
		this.setStatus(200); // set return status 200
		return this.usersService.get(userId, email);
	}

	@SuccessResponse('201', 'Created') // Custom success response
	@Post()
	public async createUser(
		@Body() requestBody: UserCreationParams,
	): Promise<void> {
		this.setStatus(201); // set return status 201
		this.usersService.create(requestBody);
	}
}
