module.exports = (sequelize, Sequelize) => {
    const Events = sequelize.define("events", {
        name: {
            type: Sequelize.STRING
        },
        eventDateTime: {
            type: Sequelize.DATE
        },
        desc: {
            type: Sequelize.STRING
        },
        isDeleted: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    },
    {
      freezeTableName: true,
    });
    return Events;
};