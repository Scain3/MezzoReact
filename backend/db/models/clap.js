'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clap = sequelize.define('Clap', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Clap.associate = function(models) {
    Clap.belongsTo(models.User, { foreignKey: "userId"});
    Clap.belongsTo(models.Story, { foreignKey: "storyId"});
  };
  return Clap;
};
