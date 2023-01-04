const router = require('express').Router();

const {
  registerUser,
  loginUser,
  getUser,
  searchUser,
  getNotifications,
  markNotificationsAsRead,
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// get user details from token
router.get('/getuser', authMiddleware, getUser);

// search for a user
router.post('/search-users', authMiddleware, searchUser);

// get all notifications for a user

router.get(
  '/get-all-notifications',
  authMiddleware,
  getNotifications
);

// mark all notifications as read
router.post(
  '/mark-all-notifications-as-read',
  authMiddleware,
  markNotificationsAsRead
);

module.exports = router;
