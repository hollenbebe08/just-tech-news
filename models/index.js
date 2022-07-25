const User = require("./User");
const Post = require("./Post");
const Vote = require('./Vote');

// create associations between the user and the post and indicates that a user can have many posted articles
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//tells which user the posted article belongs to
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

//creates association between the article and the votes it receives
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
  
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
  
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };