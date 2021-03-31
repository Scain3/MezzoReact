const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Comment, CommentClap } = require("../../db/models");

const router = express.Router();

// UPDATE comment
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

// DESTROY comment
router.post(
	"/:id(\\d+)/delete",
	asyncHandler(async (req, res) => {
		const { storyId } = req.body;
		const id = req.params.id;

		// Search and Destroy
		await Comment.destroy({ where: { id } });

		// Return comments from story for front end use
		const comments = await Comment.findAll({
			where: { storyId },
			include: [{ model: User, attributes: ["firstName", "lastName", "id"] }],
			order: [["id", "DESC"]],
		});
		res.json(comments);
	})
);

// GET CommentClap count by comment
router.get(
	"/:id(\\d+)/claps",
	asyncHandler(async (req, res) => {
		const commentId = req.params.id;

		// Returns a count of CommentClaps associated with a Comment
		const count = await CommentClap.count({ where: { commentId } });
		res.json(count);
	})
);

// CREATE CommentClap
router.post(
	"/:id(\\d+)/clap",
	asyncHandler(async (req, res) => {
		const commentId = req.params.id;
		const { userId } = req.body;

		// Create CommentClap, return new count
		await CommentClap.create({ commentId, userId });

		const count = await CommentClap.count({ where: { commentId } });
		res.json(count);
	})
);

module.exports = router;
