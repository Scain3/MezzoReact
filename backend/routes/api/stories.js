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

// GET story (includes comments, follow, isLiked)
router.get(
	"/:id(\\d+)",
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const storyId = parseInt(req.params.id);
		const story = await Story.findByPk(storyId, {
			include: [User, Like],
		});

		let isLiked = false;
		story.Likes.forEach((like) => {
			const { userId } = like;
			if (userId === res.locals.user.id) {
				isLiked = true;
			}
		});

		const isFollowingId = story.User.id;
		const userId = res.locals.user.id;
		let follow = await Follow.findOne({ where: { userId, isFollowingId } });

		const comments = await Comment.findAll({ where: { storyId } });
		res.render("readStory", { story, comments, follow, isLiked });
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
		const { comment } = req.body;
		await Comment.create({
			userId: res.locals.user.id,
			storyId: req.params.id,
			comment,
		});
		const comments = await Comment.findAll({ where: { storyId } });
		res.json(comments);
	})
);

module.exports = router;

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
// router.post('/:id/like', asyncHandler(async (req, res) => {
//     const story = await Story.findByPk(req.params.id, { include: [User, Like] });
//     let isLiked = false;
//     const storyId = req.params.id;
//     const userId = res.locals.user.id;
//     story.Likes.forEach((like) => {
//       const { userId } = like;
//       if (userId === res.locals.user.id) {
//         isLiked = true;
//       }
//     })
//     if (!isLiked) {
//       await Like.create({ storyId, userId });
//     } else {
//       let likes = await Like.findOne({ where: { storyId: req.params.id, userId: res.locals.user.id } });
//       await likes.destroy();
//     }
//     res.json(isLiked);
//   }))

// GET trending stories
router.get(
	"/trending",
	asyncHandler(async (req, res) => {
		const mostClapped = await Clap.findAll({
			attributes: ["storyId", [sequelize.literal('COUNT("storyId")'), "claps"]],
			group: "storyId",
			limit: 6,
			order: [[sequelize.literal("claps"), "DESC"]],
		});

		const stories = await Promise.all(mostClapped.map(async (story) => {
			story.dataValues.story = await Story.findByPk(story.storyId);
			return story;
		}))

		res.json(stories);
	})
);
