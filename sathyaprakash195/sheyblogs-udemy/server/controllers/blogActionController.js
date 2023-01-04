const Like = require('../models/likesModel');
const Blog = require('../models/blogsModel');
const Share = require('../models/sharesModel');
const Comment = require('../models/commentsModel');
const Notification = require('../models/notificationsModel');

const likeBlog = async (req, res) => {
  try {
    // add new like to likes collection
    const newLike = new Like(req.body);
    await newLike.save();

    // increment likes count in blog document
    await Blog.findByIdAndUpdate(req.body.blog, {
      $inc: { likesCount: 1 },
    });

    // add notification to notifications collection
    const newNotification = new Notification(
      req.body.notificationPayload
    );
    await newNotification.save();

    res.send({
      message: 'Blog liked successfully',
      data: newLike,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

const unlikeBlog = async (req, res) => {
  try {
    // delete like from likes collection
    await Like.findOneAndDelete(req.body);

    // decrement likes count in blog document
    await Blog.findByIdAndUpdate(req.body.blog, {
      $inc: { likesCount: -1 },
    });

    // add notification to notifications collection
    const newNotification = new Notification(
      req.body.notificationPayload
    );
    await newNotification.save();

    res.send({
      message: 'Blog unliked successfully',
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

const getAllLikesOfBlog = async (req, res) => {
  try {
    const likes = await Like.find({ blog: req.params.id }).populate(
      'user'
    );
    res.send({
      message: 'Likes fetched successfully',
      data: likes,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();

    // increment comments count in blog document
    await Blog.findByIdAndUpdate(req.body.blog, {
      $inc: { commentsCount: 1 },
    });

    // add notification to notifications collection
    const newNotification = new Notification(
      req.body.notificationPayload
    );
    await newNotification.save();

    res.send({
      message: 'Comment added successfully',
      data: newComment,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

const getAllCommentsOfBlog = async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.params.id })
      .populate('user')
      .sort({ createdAt: -1 });
    res.send({
      message: 'Comments fetched successfully',
      data: comments,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.body.commentId);

    // decrement comments count in blog document
    await Blog.findByIdAndUpdate(req.body.blogId, {
      $inc: { commentsCount: -1 },
    });

    res.send({
      message: 'Comment deleted successfully',
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

const shareBlog = async (req, res) => {
  try {
    const { selectedUsers, blog, sender, senderName } = req.body;

    // share blog to all selected users
    for (let i = 0; i < selectedUsers.length; i++) {
      const newShare = new Share({
        blog,
        sender,
        receiver: selectedUsers[i],
      });
      await newShare.save();
    }

    // increment shares count in blog document
    await Blog.findByIdAndUpdate(blog, {
      $inc: { sharesCount: 1 },
    });

    // add notification to notifications collection

    for (let i = 0; i < selectedUsers.length; i++) {
      const newNotification = new Notification({
        user: selectedUsers[i],
        title: `${senderName} shared a blog with you`,
        read: false,
        onClick: `/blog-desc/${blog}`,
      });
      await newNotification.save();
    }

    res.send({
      message: 'Blog shared successfully',
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

module.exports = {
  likeBlog,
  unlikeBlog,
  getAllLikesOfBlog,
  addComment,
  getAllCommentsOfBlog,
  deleteComment,
  shareBlog,
};
