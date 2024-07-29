const { Model } = require("sequelize");
const user = require("./User");
const like = require("./like");
const comment = require("./comment");
const notification = require("./notification");
const hashtage = require("./hashtag");

module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //   // define association here
      //   posts.belongsTo(models.user, { foreignKey: "user_id" });
      //   posts.hasMany(models.comment, { foreignKey: "comment_id" });
      //   posts.hasMany(models.like, { foreignKey: "like_id" });
      //   posts.hasMany(models.notification, { foreignKey: "notification_id" });
      //   posts.belongsToMany(models.hashtage, { foreignKey: "hashtage_id" });
    }
  }
  posts.init(
    {
      // id: DataTypes.INTEGER,
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Specify 'primaryKey: true' for the 'id' column
        autoIncrement: true
      },
      content: DataTypes.STRING,
      media_attachment: DataTypes.STRING,
      user_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "posts"
    }
  );
  return posts;
};
