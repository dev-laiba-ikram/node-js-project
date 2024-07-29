const { Model } = require("sequelize");
const posts = require("./posts");
const user = require("./User");

module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // notification.belongsTo(models.user, { foreignKey: user_id });
      // notification.belongsTo(models.posts, { foreignKey: user_id });
    }
  }
  notification.init(
    {
      // id: DataTypes.INTEGER,
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Specify 'primaryKey: true' for the 'id' column
        autoIncrement: true
      },
      sender_id: DataTypes.INTEGER,
      reciever_id: DataTypes.INTEGER,
      timstamp: DataTypes.STRING,
      status: DataTypes.STRING,
      content: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "notification"
    }
  );
  return notification;
};
