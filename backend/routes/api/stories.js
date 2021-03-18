const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
	Story,
	User,
	Like,
	Comment,
	Follow,
	Clap,
	sequelize,
} = require("../../db/models");

const router = express.Router();

// GET story
router.get(
	"/:id(\\d+)",
	// requireAuth,
	asyncHandler(async (req, res, next) => {
		const storyId = parseInt(req.params.id);
		const story = await Story.findByPk(storyId, {
			include: [{ model: User, attributes: ["firstName", "lastName"] }],
		});

		return res.json(story);
	})
);

// POST story
// *******CHANGED POST ROUTE TO '/STORIES/'*************
// CSRF?????
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const newStory = await Story.create({
			title: req.body.title,
			subtitle: req.body.subtitle,
			content: req.body.content,
			authorId: res.locals.user.id,
			image: req.body.image,
		});
		res.redirect(`/stories/${newStory.id}`);
	})
);

// POST comment on story
router.post(
	"/:id(\\d+)/comment",
	asyncHandler(async (req, res) => {
		const storyId = req.params.id;
		const { comment, userId } = req.body;
		console.log(req);
		console.log("comment", comment, "userId", userId);
		// await Comment.create({
		// 	userId,
		// 	storyId: req.params.id,
		// 	comment,
		// });
		const comments = await Comment.findAll({
			where: { storyId },
		});
		res.json(comments);
	})
);

// POST like (or delete like)
router.post(
	"/:id/like",
	asyncHandler(async (req, res) => {
		const storyId = req.params.id;
		const currentUserId = res.locals.user.id;
		const story = await Story.findByPk(storyId, { include: [User, Like] });
		let isLiked = false;
		story.Likes.forEach((like) => {
			const { userId } = like;
			if (userId === res.locals.user.id) {
				isLiked = true;
			}
		});
		if (!isLiked) {
			await Like.create({ storyId, userId: currentUserId });
		} else {
			let likes = await Like.findOne({
				where: { storyId, userId: currentUserId },
			});
			await likes.destroy();
		}
		res.json(isLiked);
	})
);

// GET trending stories
router.get(
	"/trending",
	asyncHandler(async (req, res) => {
		// sequelize.literal will allow us to count the number of claps each story has.
		// Sorting in descending order and limiting to 6 results for top stories.
		const mostClapped = await Clap.findAll({
			attributes: ["storyId", [sequelize.literal('COUNT("storyId")'), "claps"]],
			group: "storyId",
			limit: 6,
			order: [[sequelize.literal("claps"), "DESC"]],
		});

		// Promise.all stops pending promises being returned.
		// Find the story by ID, get author info, and append new data to the dataValues object.
		const stories = await Promise.all(
			mostClapped.map(async (story) => {
				story.dataValues.story = await Story.findByPk(story.storyId, {
					include: [{ model: User, attributes: ["firstName", "lastName"] }],
				});
				return story;
			})
		);

		res.json(stories);
	})
);

// GET comments by story
router.get(
	"/:id(\\d+)/comments",
	asyncHandler(async (req, res) => {
		const storyId = req.params.id;
		const comments = await Comment.findAll({
			where: { storyId },
			include: [{ model: User, attributes: ["firstName", "lastName"] }],
		});
		res.json(comments);
	})
);

module.exports = router;
