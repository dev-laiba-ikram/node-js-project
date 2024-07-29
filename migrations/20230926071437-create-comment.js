/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users", // This should be the name of the table you're referencing
          key: "id" // This should be the name of the column you're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      posts_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "posts", // This should be the name of the table you're referencing
          key: "id" // This should be the name of the column you're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      titel: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comments");
  }
};
