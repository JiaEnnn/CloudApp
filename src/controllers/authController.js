const User = require("../models/User");

exports.registerProfile = async (req, res) => {
  try {
    const { firebaseUid, fullName, email } = req.body;

    if (!firebaseUid || !fullName || !email) {
      return res.status(400).json({
        message: "firebaseUid, fullName, and email are required",
      });
    }

    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User profile already exists",
      });
    }

    const newUser = await User.create({
      firebase_uid: firebaseUid,
      full_name: fullName,
      email,
      role: "user",
    });

    return res.status(201).json({
      message: "User profile created successfully",
      user: {
        id: newUser.id,
        firebase_uid: newUser.firebase_uid,
        full_name: newUser.full_name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Register profile error:", error);
    return res.status(500).json({
      message: "Failed to create user profile",
      error: error.message,
    });
  }
};