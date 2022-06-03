const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment")

//relations
User.hasMany(Blog);
Blog.belongsTo(User, {})
Blog.hasMany(Comment)
Comment.belongsTo(Blog, {
    through: User,
})
User.hasMany(Comment)


module.exports = {
    User,
    Blog,
    Comment
}