const User = require("../models/user");

const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

// account creation
export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashPass = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashPass, role });
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.status(201).json({ token });
};

// account login
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "invalid credentials" });

  const token = jwt.sign({ id: user._id, role: user.role });
  res.json({ token });
};
