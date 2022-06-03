const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comment")

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