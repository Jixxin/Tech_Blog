const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const blogRoutes = require("./blogRoutes");
router.use("/api/blogs",blogRoutes)

const frontEnd = require("./frontEndRoutes");
router.use("/",frontEnd)

const commentRoutes = require("./commentRoutes");
router.use("/api/comments",commentRoutes)



module.exports = router;