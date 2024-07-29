const { Model } = require("sequelize");
const user = require("./User");
const posts = require("./posts");

module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // like.belongsToMany(models.user);
      // like.belongsToMany(models.posts);
    }
  }
  like.init(
    {
      // user_id: DataTypes.STRING,
      post_id: DataTypes.STRING,
      like_id: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "like"
    }
  );
  return like;
};
