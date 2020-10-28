const { query } = require("express");
const Pirate = require("../models/index.models");

module.exports = {
    findAll: (req, res) => {
        Pirate.find()
            .then(Pirates => res.json(Pirates))
            .catch(err => res.json(err));
    },
    findOne: (req, res) => {
        Pirate.findById(req.params.id)
            .then(Pirate => res.json(Pirate))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        Pirate.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        Pirate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, context: "query"})
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        Pirate.findByIdAndRemove(req.params.id, req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
};