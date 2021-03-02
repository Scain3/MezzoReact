const express = require('express');
const { check } = require('express-validator')
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Story, User, Like, Comment, Follow } = require('../db/models');

const router = express.Router();

// GET story
router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id);
    const story = await Story.findByPk(storyId, {
        include: [User, Like]
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
    let follow = await Follow.findOne({where: {userId, isFollowingId}});

    const comments = await Comment.findAll({ where: {storyId} });
    res.render('readStory', { story, comments, follow, isLiked });
}));

// POST comment on story
router.post('/:id(\\d+)/comment', asyncHandler(async (req, res) => {
    const storyId = req.params.id;
    const { comment } = req.body;
    await Comment.create({
        userId: res.locals.user.id,
        storyId: req.params.id,
        comment,
    });
    const comments = await Comment.findAll({where: { storyId }});
    res.json(comments);
}));
