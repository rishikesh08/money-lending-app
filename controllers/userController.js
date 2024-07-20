const User = require('../models/user');

// Get user data
exports.getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json(user);

  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Borrow money
exports.borrowMoney = async (req, res) => {
  const { amount, tenure } = req.body; // tenure in months

  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    // Calculate new purchase power
    const newPurchasePower = user.purchasePower - amount;

    // Calculate monthly repayment with 8% interest rate
    const interestRate = 0.08;
    const monthlyRepayment = (amount + (amount * interestRate)) / tenure;

    user.purchasePower = newPurchasePower;
    await user.save();

    res.json({ 
      newPurchasePower, 
      monthlyRepayment 
    });

  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
