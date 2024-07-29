const { Model } = require("sequelize");
const user = require("./User");

module.exports = (sequelize, DataTypes) => {
  class privacy_setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // privacy_setting.belongsToMany(models.user, { foreignKey: user_id });
    }
  }
  privacy_setting.init(
    {
      // id: DataTypes.INTEGER,
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Specify 'primaryKey: true' for the 'id' column
        autoIncrement: true
      },
      user_id: DataTypes.INTEGER,
      post_visibility: DataTypes.STRING,
      friend_request: DataTypes.STRING,
      message_privacy: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "privacy_setting"
    }
  );
  return privacy_setting;
};
