const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');

const {
  likeBlog,
  unlikeBlog,
  getAllLikesOfBlog,
  addComment,
  getAllCommentsOfBlog,
  deleteComment,
  shareBlog,
} = require('../controllers/blogActionController');

// like a blog
router.post('/like-blog', authMiddleware, likeBlog);

// unlike a blog
router.post('/unlike-blog', authMiddleware, unlikeBlog);

// get all likes of a blog
router.get('/get-all-likes-of-blog/:id', getAllLikesOfBlog);

// add a comment
router.post('/add-comment', authMiddleware, addComment);

// get all comments of a blog
router.get('/get-all-comments-of-blog/:id', getAllCommentsOfBlog);

// delete a comment
router.post('/delete-comment', authMiddleware, deleteComment);

// share a blog
router.post('/share-blog', authMiddleware, shareBlog);
module.exports = router;
