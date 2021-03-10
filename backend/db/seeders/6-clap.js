"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Claps", [
			{ userId: 1, storyId: 1, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 2, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 2, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 3, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 3, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 3, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 4, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 4, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 4, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 4, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 6, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 6, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, storyId: 7, createdAt: new Date(), updatedAt: new Date() },
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Claps", null, {});
	},
};
