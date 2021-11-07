var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NewSource = new mongoose.Schema({
    url: {type: String},
    favicon: {type: String},
    userId:{type: Schema.ObjectId, ref: "User"},
    }, {timestamps: true});
module.exports = mongoose.model("NewSourceDatabase", NewSource);