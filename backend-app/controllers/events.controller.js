const db = require("../models/db");
const Events = db.events;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name || !req.body.eventDateTime || !req.body.desc) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const event = {
        name: req.body.name,
        eventDateTime: req.body.eventDateTime,
        desc: req.body.desc
    };

    Events.create(event)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the event."
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Events.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving events."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Events.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find event with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving event with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Events.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Event was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Event with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Events.update(
        { isDeleted: 1 },
        { where: { id: id } }
    ).then(num => {
        if (num == 1) {
            res.send({
                message: "Event was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Event with id=" + id
        });
    });
};