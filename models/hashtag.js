const { Model } = require("sequelize");
const posts = require("./posts");

module.exports = (sequelize, DataTypes) => {
  class hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // hashtag.belongsToMany(models.posts);
    }
  }
  hashtag.init(
    {
      // id: DataTypes.INTEGER,
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Specify 'primaryKey: true' for the 'id' column
        autoIncrement: true
      },
      timstamp: DataTypes.STRING,
      text: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "hashtag"
    }
  );
  return hashtag;
};
