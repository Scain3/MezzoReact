"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("CommentClaps", [
			{ userId: 1, commentId: 1, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 2, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 2, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 3, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 3, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 3, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 4, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 4, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 4, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 4, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 5, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 6, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 6, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 12, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 12, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 12, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 12, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 12, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 12, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 12, createdAt: new Date(), updatedAt: new Date() },
			{ userId: 1, commentId: 12, createdAt: new Date(), updatedAt: new Date() },
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("CommentClaps", null, {});
	},
};
