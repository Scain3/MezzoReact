'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
		"User",
		{
			firstName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(100),
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
			},
		},
		{
			defaultScope: {
				attributes: {
					exclude: ["hashedPassword", "email", "createdAt", "updatedAt"],
				},
			},
			scopes: {
				currentUser: {
					attributes: { exclude: ["hashedPassword"] },
				},
				loginUser: {
					attributes: {},
				},
			},
		}
	);
  User.associate = function (models) {
    		User.hasMany(models.Follow, {
					as: "user",
					foreignKey: "userId",
					onDelete: "cascade",
					hooks: true,
				});
				User.hasMany(models.Follow, {
					as: "followed",
					foreignKey: "isFollowingId",
					onDelete: "cascade",
					hooks: true,
				});
				User.hasMany(models.Story, {
					foreignKey: "authorId",
					onDelete: "cascade",
					hooks: true,
				});
				User.hasMany(models.Like, {
					foreignKey: "userId",
					onDelete: "cascade",
					hooks: true,
				});
				User.hasMany(models.Comment, {
					foreignKey: "userId",
					onDelete: "cascade",
					hooks: true,
				});
  };
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        email: credential
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ firstName, lastName, email, password }) {
    const hashedPassword = await bcrypt.hashSync(password);
    const user = await User.create({
      firstName,
	  lastName,
      email,
      password: hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};
