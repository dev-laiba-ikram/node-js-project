/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // FORIGNE KEY
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // This should be the name of the table you're referencing
          key: 'id', // This should be the name of the column you're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      media_attachment: {
        allowNull: false,
        type: Sequelize.BLOB,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  },
};
