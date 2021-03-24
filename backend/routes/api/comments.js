const express = require("express");
const asyncHandler = require("express-async-handler");
const { Story, User, Comment } = require("../../db/models");

const router = express.Router();

router.post(
	"/:id(\\d+)/edit",
	asyncHandler(async (req, res) => {
		const commentId = req.params.id;
		const { comment, storyId } = req.body;

        // Find, Update, Save comment
		const commentToEdit = await Comment.findByPk(commentId);
		commentToEdit.comment = comment;
		await commentToEdit.save();

        // Return comments from story for front end use
		const comments = await Comment.findAll({
			where: { storyId },
			include: [{ model: User, attributes: ["firstName", "lastName", "id"] }],
			order: [["id", "DESC"]],
		});
		res.json(comments);
	})
);

module.exports = router;
