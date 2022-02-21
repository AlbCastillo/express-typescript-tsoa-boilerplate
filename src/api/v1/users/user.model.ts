import { Optional } from 'sequelize';
import {
	Table,
	Column,
	Model,
	PrimaryKey,
	Default,
	Unique,
	DataType,
	IsUUID,
} from 'sequelize-typescript';
import { v4 as uuid } from 'uuid';

/**
 * You can define your model in a less strict way
 * https://www.npmjs.com/package/sequelize-typescript#model-definition
 */
export interface IUser {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	admin: boolean;
}

export interface IUserCreation extends Optional<IUser, 'id'> {}

@Table({
	tableName: 'users',
	timestamps: true,
	version: true,
})
export class User extends Model<IUser, IUserCreation> {
	@IsUUID(4)
	@PrimaryKey
	@Unique(true)
	@Default(() => uuid())
	@Column(DataType.UUIDV4)
	id!: string;

	@Column(DataType.STRING)
	firstname!: string;

	@Column(DataType.STRING)
	lastname!: string;

	@Unique(true)
	@Column(DataType.STRING)
	email!: string;

	@Column(DataType.STRING)
	admin!: boolean;
}
