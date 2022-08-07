const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user',
});

Post.belongsTo(User, {
    foreignKey: 'user',
});

module.exports = { User, Post};