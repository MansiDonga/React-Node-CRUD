module.exports = (app) => {
    const members = require("../controllers/members.controller.js");
    var router = require("express").Router();

    router.post("/", members.create);
    router.get("/", members.findAll);
    router.get("/:id", members.findOne);
    router.put("/:id", members.update);
    router.delete("/:id", members.delete);

    app.use('/api/members', router);
};