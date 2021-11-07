var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Promotion = new mongoose.Schema({
    AddTitle: {type: String},
    AddContent: {type: String},
    PromotedText: {type: String},
    VisitSiteLink: {type: String},
    AddImageUrl: {type: String},
    }, {timestamps: true});
module.exports = mongoose.model("PromotionDatabase", Promotion);