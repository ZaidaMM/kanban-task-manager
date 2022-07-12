// desc:   Register New User
// route:  /api/users
// access: Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fileds');
  }

  res.send('Register Route');
});

// desc:   Login User
// route:  /api/users/login
// access: Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

module.exports = { registerUser, loginUser };
