module.exports = (sequelize, Sequelize) => {
  const Members = sequelize.define(
    "members",
    {
      enrollmentNo: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      department: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      batch: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      githubid: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      linkedin: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      uuid: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Members;
};
