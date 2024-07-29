const { Model } = require("sequelize");
const user = require("./User");
// const posts = require("./posts");
// const user = require("./user");
// const notification = require("./notification");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Comment.belongsTo(models.User);
      // comment.belongsTo(models.posts, { foreignKey: "user_id" });
      // comment.hasMany(models.notification, { foreignKey: "user_id" });
    }
  }
  Comment.init(
    {
      // id: DataTypes.INTEGER,
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Specify 'primaryKey: true' for the 'id' column
        autoIncrement: true
      },
      user_id: DataTypes.INTEGER,
      posts_id: DataTypes.INTEGER,
      titel: DataTypes.STRING,
      Description: DataTypes.STRING,
      content: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Comment"
    }
  );
  return Comment;
};
