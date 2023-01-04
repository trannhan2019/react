const Blog = require('../models/blogsModel');
const Like = require('../models/likesModel');
const Comment = require('../models/commentsModel');
const Share = require('../models/sharesModel');

// add new blog
const addBlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.send({
      message: 'Blog added successfully',
      data: newBlog,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

// get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate('user')
      .sort({ createdAt: -1 });
    res.send({
      message: 'Blogs fetched successfully',
      data: blogs,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

// get blog by id
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('user');
    res.send({
      message: 'Blog fetched successfully',
      data: blog,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

// update blog
const updateBlog = async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      message: 'Blog updated successfully',
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

// delete blog
const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.send({
      message: 'Blog deleted successfully',
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

// get all blogs by user
const getBlogsByUser = async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.body.userId }).sort({
      createdAt: -1,
    });
    res.send({
      message: 'Blogs fetched successfully',
      data: blogs,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

// get all blogs by liked by user
const getAllBlogsByLikedByUser = async (req, res) => {
  try {
    const likes = await Like.find({
      user: req.body.userId,
    }).populate({
      path: 'blog',
      populate: {
        path: 'user',
      },
    });
    res.send({
      message: 'Blogs fetched successfully',
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

// get all blogs by commented by user
const getAllBlogsByCommentedByUser = async (req, res) => {
  try {
    const blogs = await Comment.find({
      user: req.body.userId,
    }).populate({
      path: 'blog',
      populate: {
        path: 'user',
      },
    });
    res.send({
      message: 'Blogs fetched successfully',
      data: blogs,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

// get all blogs by shared by user
const getAllBlogBySharedByUser = async (req, res) => {
  try {
    const blogs = await Share.find({
      sender: req.body.userId,
    })
      .populate({
        path: 'blog',
        populate: {
          path: 'user',
        },
      })
      .populate('receiver')
      .sort({ createdAt: -1 });
    res.send({
      message: 'Blogs fetched successfully',
      data: blogs,
      success: true,
    });
  } catch (error) {
    res.send({
      error: error.message,
      success: false,
    });
  }
};

// get all blogs by shared to user
const getAllBlogsBySharedToUser = async (req, res) => {
  try {
    const blogs = await Share.find({
      receiver: req.body.userId,
    })
      .populate({
        path: 'blog',
        populate: {
          path: 'user',
        },
      })
      .populate('sender')
      .sort({ createdAt: -1 });
    res.send({
      message: 'Blogs fetched successfully',
      data: blogs,
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
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogsByUser,
  getAllBlogsByLikedByUser,
  getAllBlogsByCommentedByUser,
  getAllBlogBySharedByUser,
  getAllBlogsBySharedToUser,
};
