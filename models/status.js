//dependencies 
var restful = require('node-restful');
var mongoose = restful.mongoose;
var Schema = mongoose.Schema;

//schema
var statusSchema = new Schema({
    fbname: String,
    content: String,
    likes: Number,
    comments: Number,
});

//return models
module.exports = restful.model('tblstatus',statusSchema);