const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const db = require("../models/db");
const Members = db.members;
const Op = db.Sequelize.Op;

exports.register = (req, res) => {
  if (
    !req.body.enrollmentNo ||
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.department ||
    !req.body.batch ||
    !req.body.avatar ||
    !req.body.password
  ) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  bcrypt.hash(req.body.password, 8, (err, hash) => {
    let userUUID = uuidv4();

    let member = {
      enrollmentNo: "ENO" + req.body.batch + req.body.enrollmentNo,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      department: req.body.department,
      batch: req.body.batch,
      avatar: req.body.avatar,
      username:
        !req.body.username ||
        req.body.username === null ||
        req.body.username === ""
          ? userUUID
          : req.body.username,
      password: hash,
      githubid: req.body.githubid,
      linkedin: req.body.linkedin,
      uuid: userUUID,
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
  });
};

exports.memberLogin = (req, res) => {
  // const id = req.params.id;
  //   bcrypt.compare(myPlaintextPassword, hash).then(function(result) {
  //     // result == true
  // });

  console.log(req.body);
  Members.findOne({
    where: { username: req.body.username, password: req.body.password },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Members.",
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
