// This file contains all the properties of the images uploaded

const { Schema, model } = require('mongoose');

const imgSchema = new Schema({
    title: {type: String},
    description: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    created_at: {type: Date, default: Date.now()}
});

module.exports = model('image', imgSchema);