const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const generator = require("generate-password");
const jwt = require("jsonwebtoken");

const db = require("../models/db");
const Members = db.members;
const Op = db.Sequelize.Op;

exports.register = (req, res) => {
  const ismanual = req.query.ismanual;
  const passwordConfig = {
    length: 6,
    numbers: true,
    lowercase: true,
    uppercase: true,
  };

  if (ismanual === "manual") {
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
  }

  var userUUID = uuidv4();
  var password =
    !req.body.password || req.body.password !== "" || req.body.password !== null
      ? generator.generate(passwordConfig)
      : req.body.password;

  bcrypt.hash(password, 10, (err, hash) => {
    console.log(hash);
    let member = {
      enrollmentNo: req.body.enrollmentNo,
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
        if (ismanual === "manual") {
          res.send(data);
        } else if (ismanual === "qr") {
          res.send({ userUUID: userUUID, password: password });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while registering!",
        });
      });
  });
};

exports.memberLogin = async (req, res) => {
  const userDetails = await Members.findOne({
    where: { username: req.body.username },
  });

  console.log(userDetails);

  if (!userDetails) {
    console.log("-------------------- NO USER FOUND --------------------");
    res.status(401).send("Username is invalid!");
  } else {
    bcrypt.compare(
      req.body.password.toString(),
      userDetails.password.toString(),
      (err, res) => {
        console.log(res);
        console.log(
          "------------------------------------------------------",
          userDetails.password
        );
        const pas = bcrypt.hash(req.body.password, 10);
        console.log(
          "------------------------------------------------------",
          pas
        );
      }
    );
  }

  // authentication successful
  // const token = jwt.sign(
  //   {
  //     data: "foobar",
  //   },
  //   "secret",
  //   { expiresIn: "1h" }
  // );

  // res.status(200).send(token);
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
  const id = req.query.id;
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
