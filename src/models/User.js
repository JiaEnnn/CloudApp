<<<<<<< HEAD
const pool = require('../config/db');

const User = {
  // Find a user by their Firebase UID
  findByFirebaseUid: async (firebaseUid) => {
    const result = await pool.query('SELECT * FROM users WHERE firebase_uid = $1', [firebaseUid]);
    return result.rows[0];
  },

  // Create a new user if they don't exist yet
  create: async (firebaseUid, email) => {
    const result = await pool.query(
      'INSERT INTO users (firebase_uid, email) VALUES ($1, $2) ON CONFLICT (firebase_uid) DO UPDATE SET email = EXCLUDED.email RETURNING *',
      [firebaseUid, email]
    );
    return result.rows[0];
  }
};
=======
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firebase_uid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
>>>>>>> 201809c4c06e9d8a65c8cec40e80c06ecd077008

module.exports = User;