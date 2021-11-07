var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Source = new mongoose.Schema({
    displayScreenTitle: {type: String},
    source: {type: String},
    link: {type: String},
    icon: {type: String},
    active: {type: Boolean},
    }, {timestamps: true});
module.exports = mongoose.model("SourceDatabase", Source);