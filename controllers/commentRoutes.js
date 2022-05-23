const express = require("express");
const router = express.Router();
const {User,Blog,Comment} = require("../models/");
const bcrypt  = require("bcrypt");

//find all
router.get("/", (req, res) => {
  Comment.findAll({
    include:[User],
    include:[Blog]
  })
    .then(dbComments => {
      res.json(dbComments);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.post("/", (req, res) => {
  //   if(!req.session.user){
  //     return res.status(401).json({msg:"ya gotta login to comment on a blog post!"})
  // }
    Comment.create({
      body:req.body.body,
      UserId:req.body.UserId,
      BlogId:req.body.BlogId
    })
      .then(newBlog => {
        res.json(newBlog);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

//delete a comment
router.delete("/:id", (req, res) => {
  comment.destroy({
    where: {
      id: req.params.id
    }
  }).then(delComment => {
    res.json(delComment);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});


module.exports = router;