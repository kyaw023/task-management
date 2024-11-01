import { Request, Response } from "express";
const bcrypt = require("bcrypt");
import User, { IUser } from "../models/UserModel";
import { createToken } from "../helpers/createToken";

export const registerUser = async (
  req: Request,
  res: Response,
): Promise<any> => {
  const { name, email, password, role } = req.body;
  try {
    // Check if user already exists
    const isUserExisted = await User.findOne({ email });

    if (isUserExisted) {
      return res.status(409).json({ message: "Email already exists." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "Registration successful",
      success: true,
      user,
    });
  } catch (error: unknown) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      message: "An error occurred during registration.",
      success: false,
      error: (error as Error).message,
    });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password." });
    }

    const token = createToken(user._id as string);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day // 1 day
    });

    const { password: _, ...userWithoutPassword } = user.toObject();

    return res.status(200).json({
      message: "Login successful",
      success: true,
      user: userWithoutPassword,
      token,
    });
  } catch (error: unknown) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      message: "An error occurred during login.",
      success: false,
      error: (error as Error).message,
    });
  }
};

export const checkSession = async (req: any, res: Response): Promise<any> => {
  const userId = req.user?._id;

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
      success: false,
    });
  }

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false,
    });
  }
  const { password: _, ...userWithoutPassword } = user.toObject();

  return res.status(200).json({
    message: "Session check successful",
    success: true,
    user: userWithoutPassword,
  });
};
