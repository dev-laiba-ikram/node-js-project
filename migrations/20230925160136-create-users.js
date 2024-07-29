// migrations/20190610033956-create-users.js

module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable("users", {
      id: {
        // allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      token: {
        allowNull: true,
        // autoIncrement: true,
        type: DataTypes.STRING
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false
        // unique: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
        // unique: true
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
        // unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true
      },
      birthdate: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true
      },
      relationship_status: {
        allowNull: false,
        type: DataTypes.STRING
      }
    });
  },

  down(queryInterface, DataTypes) {
    return queryInterface.dropTable("users");
  }
};
