const User = require("./User");
const Post = require("./Post");

// create associations between the user and the post and indicates that a user can have many posted articles
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//tells which user the posted article belongs to
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };