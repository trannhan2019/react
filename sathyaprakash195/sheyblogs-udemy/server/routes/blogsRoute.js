const router = require('express').Router();
const {
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
} = require('../controllers/BlogController');
const authMiddleware = require('../middlewares/authMiddleware');

// add new blog
router.post('/add-blog', authMiddleware, addBlog);

// get all blogs
router.get('/get-all-blogs', getAllBlogs);

// get blog by id
router.get('/get-blog-by-id/:id', getBlogById);

// update blog
router.put('/update-blog/:id', authMiddleware, updateBlog);

// delete blog
router.delete('/delete-blog/:id', authMiddleware, deleteBlog);

// get all blogs by user
router.get('/get-all-blogs-by-user', authMiddleware, getBlogsByUser);

// get all blogs by liked by user
router.get(
  '/get-all-blogs-by-liked-by-user',
  authMiddleware,
  getAllBlogsByLikedByUser
);

// get all blogs by commented by user
router.get(
  '/get-all-blogs-by-commented-by-user',
  authMiddleware,
  getAllBlogsByCommentedByUser
);

// get all blogs by shared by user
router.get(
  '/get-all-blogs-by-shared-by-user',
  authMiddleware,
  getAllBlogBySharedByUser
);

// get all blogs by shared to user
router.get(
  '/get-all-blogs-by-shared-to-user',
  authMiddleware,
  getAllBlogsBySharedToUser
);
module.exports = router;
