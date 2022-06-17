const db = require("../models/db");
const Members = db.members;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (
    !req.body.enrollmentNo ||
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.department ||
    !req.body.batch ||
    !req.body.avatar ||
    !req.body.username ||
    !req.body.password
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const member = {
    enrollmentNo: req.body.enrollmentNo,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    department: req.body.department,
    batch: req.body.batch,
    avatar: req.body.avatar,
    username: req.body.username,
    password: req.body.password,
    githubid: req.body.githubid,
    linkedin: req.body.linkedin,
  };

  Members.create(member)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the member.",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Members.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Members.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Members.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find member with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving member with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Members.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Member was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Member with id=${id}. Maybe Member was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Member with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Members.update({ isDeleted: 1 }, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Member was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Member with id=${id}. Maybe Member was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Member with id=" + id,
      });
    });
};
