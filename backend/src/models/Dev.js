const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const DevSchema = new mongoose.Schema({
    name : String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs : [String]
});

module.exports = mongoose.model('Dev',  DevSchema )