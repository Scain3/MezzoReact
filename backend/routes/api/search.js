const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { Op } = require('sequelize');
const { Story, User } = require('../../db/models');

const searchStories = async(term) => {
    return await Story.findAll({
        where: {
            [Op.or]: [{title: {[Op.iLike]: term}}, {subtitle: {[Op.iLike]: term}}, {content: {[Op.iLike]: term}}]
        },
        include: [{model: User, attributes: ["firstName", "lastName"]}]
    })
}

const searchAuthor = async(term) => {
    return await User.findAll({
        where: {
            [Op.or]: [{firstName: {[Op.iLike]: term}}, {lastName: {[Op.iLike]: term}}]
        }
    })
}

router.get('/', asyncHandler(async(req, res) => {
    let stories;
    let error = "";
    try{
        stories = await searchStories(`%${req.query.term}%`);
        authors = await searchAuthor(`%${req.query.term}%`);
    } catch(e){
        console.error(e);
        error = `An error occurred that reads "${e.message}". Check the console for more details.`;
    }

    res.json({
        authors,
        stories,
        error
    })

}))

module.exports = router;
