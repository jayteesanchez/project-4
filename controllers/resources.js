var Post = require('../models/Post');

var index = function(req, res, next) {
  Post.find({}, function (err, post) {
    if (err) res.send(err);

    res.json({posts: posts});
  });
};

var show = function(req, res, next) {
  Post.findById(req.params.id, function(err, post) {
    if (err) res.send(err);

    res.render('posts/show', {post: post});
  });
};

// 'new' is a keyword in JS, so we can't use it for a variable!
var newRoute = function(req, res, next) {
  res.render('posts/new');
};

var create = function(req, res, next) {
  Post.create(req.body.post, function (err, post) {
    if (err) res.send(err);

    res.redirect('/posts/' + post.id);
  });
};

module.exports = {
  index:  index,
  show:   show,
  new:    newRoute,
  create: create
};
