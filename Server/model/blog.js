const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const {
    Schema
} = mongoose;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: {
        type: [String]
    },
});


const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;