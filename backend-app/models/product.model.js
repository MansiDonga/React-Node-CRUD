module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "products",
    {
      productName: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      rate: {
        type: Sequelize.INTEGER,
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
  return Product;
};
