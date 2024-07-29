/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('follows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // follow_id: {
      //   type: Sequelize.INTEGER
      // },
      following_id: {
        type: Sequelize.INTEGER,
      },
      follower_id: {
        type: Sequelize.INTEGER,
      },
      timestampt: {
        type: Sequelize.STRING,
      },

      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('follows');
  },
};
