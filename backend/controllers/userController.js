import User from '../models/userModel.js'
import mongoose from 'mongoose';
import generateToken from '../utils/generateToken.js';


// @desc Auth user & get token
// @route POST /api/products
// @access Public

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401);
    throw new Error('Invalid login')
  }
}

// @desc Get user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = async (req, res) => {
  res.send('Success');
}

export {
  authUser,
  getUserProfile
}