const registerUser = (req, res) => {
  // Validation
  if (!req.body.email) {
    res.status(400);
    throw new Error('Please add an email address');
  }
  res.send('Register User');
};

module.exports = {
  registerUser,
};
