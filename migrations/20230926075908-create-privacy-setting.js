/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('privacy_settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

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
      post_visibility: {
        type: Sequelize.STRING,
      },
      friend_request: {
        type: Sequelize.STRING,
      },
      message_privacy: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('privacy_settings');
  },
};
