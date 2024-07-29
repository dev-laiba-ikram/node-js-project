/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("notifications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // id: {
      //   type: Sequelize.INTEGER,
      // },
      sender_id: {
        type: Sequelize.INTEGER
      },
      reciever_id: {
        type: Sequelize.INTEGER
      },
      timstamp: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      }
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
    await queryInterface.dropTable("notifications");
  }
};
