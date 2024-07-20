const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Function to calculate age from DOB
const calculateAge = dob => {
  const diff = Date.now() - dob.getTime();
  const age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
};

// Signup
exports.signup = async (req, res) => {
  const { phoneNumber, email, name, dob, monthlySalary, password } = req.body;

  try {
    // Validation
    const age = calculateAge(new Date(dob));
    if (age < 20) return res.status(400).json({ msg: 'User must be above 20 years of age' });
    if (monthlySalary < 25000) return res.status(400).json({ msg: 'Monthly salary must be 25k or more' });

    // Check if user exists
    const userExists = await User.findOne({ $or: [{ email }, { phoneNumber }] });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      phoneNumber,
      email,
      name,
      dob,
      monthlySalary,
      password: hashedPassword,
      status: 'Approved',
      purchasePower: monthlySalary * 0.5 // For example, purchase power is 50% of monthly salary
    });

    await newUser.save();
    res.status(201).json({ msg: 'User registered successfully' });

  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // Create JWT
    const payload = { userId: user._id };
    const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });

    res.json({ token });

  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
