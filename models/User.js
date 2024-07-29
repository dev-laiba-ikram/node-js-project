const { Model } = require("sequelize");
const posts = require("./posts");
const comment = require("./comment");
const like = require("./like");
const notification = require("./notification");
const privacy_setting = require("./privacy_setting");
const follow = require("./follow");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasMany(models.posts);
      // User.hasMany(models.comment, { foreignKey: "user_id" });
      // User.hasMany(models.like, { foreignKey: "user_id" });
      // User.hasMany(models.notification, { foreignKey: "user_id" });
      // User.hasOne(models.privacy_setting, { foreignKey: "user_id" });
      // User.belongsToMany(models.follow);
    }
  }
  User.init(
    {
      token: DataTypes.INTEGER,
      username: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      birthdate: DataTypes.STRING,
      relationship_status: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: false, // Ensure timestamps are enabled
      underscored: true // Use underscores in column names
    }
  );

  return User;
};
