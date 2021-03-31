'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentClap = sequelize.define('CommentClap', {
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  CommentClap.associate = function(models) {
      CommentClap.belongsTo(models.User, { foreignKey: "userId" });
			CommentClap.belongsTo(models.Story, { foreignKey: "storyId" });
  };
  return CommentClap;
};
