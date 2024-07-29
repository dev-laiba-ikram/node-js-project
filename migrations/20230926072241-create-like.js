/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('likes', {
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
      posts_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'posts', // This should be the name of the table you're referencing
          key: 'id', // This should be the name of the column you're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('likes');
  },
};
