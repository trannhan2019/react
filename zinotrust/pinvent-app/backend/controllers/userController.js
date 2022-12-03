const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

// Environment Variables
const JWTSecret = process.env.JWTSecret;
const clientURL = process.env.CLIENT_URL;

//Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, JWTSecret, { expiresIn: '1d' });
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill in all required fields');
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error('Password must be up to 6 characters');
  }
  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  // Create user
  const user = await User.create({
    name,
    email,
    password,
  });
  const token = generateToken(user._id);

  // Send the HTTP-only cookie
  res.cookie('token', token, {
    path: '/',
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: 'none',
    secure: true,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      photo: user.photo,
      phone: user.phone,
      bio: user.bio,
      token,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

module.exports = {
  registerUser,
};
