const express = require('express');
const router = express.Router();

const protect = require('../middleware/authMiddleware');

const {
  registerUser,
  loginUser,
  loginStatus,
  logout,
  getUser,
} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/loggedIn', loginStatus);
router.get('/logout', logout);
router.get('/getuser', protect, getUser);

module.exports = router;
