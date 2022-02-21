module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			firstname: {
				type: Sequelize.STRING,
			},
			lastname: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			admin: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: new Date(),
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: new Date(),
			},
			version: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
		});
	},
	down: (queryInterface) => {
		return queryInterface.dropTable('users');
	},
};
