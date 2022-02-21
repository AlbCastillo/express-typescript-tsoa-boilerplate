const { v4: uuidv4 } = require('uuid');

module.exports = {
	up: (queryInterface) => {
		return queryInterface.bulkInsert('users', [
			{
				id: uuidv4(),
				version: 0,
				firstname: 'Name1',
				lastname: 'Lastname1',
				email: 'email1@test.com',
				admin: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: uuidv4(),
				version: 0,
				firstname: 'Name2',
				lastname: 'Lastname2',
				email: 'email2@test.com',
				admin: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface) => {
		return queryInterface.bulkDelete('users', null, {});
	},
};
