const db = require("../models/db");
const Product = db.products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.productName || !req.body.description || !req.body.rate) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const product = {
    productName: req.body.productName,
    description: req.body.description,
    rate: req.body.rate,
  };

  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding the product.",
      });
    });
};

exports.findAll = (req, res) => {
  //   const productName = req.query.productName;
  //   var condition = productName ? { productName: { [Op.like]: `%${productName}%` } } : null;

  Product.findAll()
    .then((data) => {
      res.send({ data: data, message: "Data Fetched", status: 0 });
    })
    .catch((err) => {
      res.status(500).send({
        data: [],
        message:
          err.message || "Some error occurred while retrieving products.",
        status: 1,
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Product with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Product.update(
    {
      isDeleted: 1,
    },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id,
      });
    });
};
