const { Model } = require("sequelize");
const user = require("./User");

module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Follow.belongsToMany(models.User);
    }
  }
  Follow.init(
    {
      // id: DataTypes.INTEGER,
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Specify 'primaryKey: true' for the 'id' column
        autoIncrement: true
      },
      following_id: DataTypes.INTEGER,
      follower_id: DataTypes.INTEGER,
      timestamp: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Follow"
    }
  );
  return Follow;
};
