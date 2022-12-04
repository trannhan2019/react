const express = require('express');
const router = express.Router();

const protect = require('../middleware/authMiddleware');

const {
  registerUser,
  loginUser,
  logout,
  getUser,
} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);
router.get('/getuser', protect, getUser);

module.exports = router;
