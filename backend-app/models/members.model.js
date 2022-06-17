module.exports = (sequelize, Sequelize) => {
  const Members = sequelize.define(
    "members",
    {
      enrollmentNo: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      department: {
        type: Sequelize.STRING,
      },
      batch: {
        type: Sequelize.STRING,
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
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
