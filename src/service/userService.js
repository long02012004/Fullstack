import bcrypt from "bcrypt";
import mysql from "mysql2/promise";
import db from "../models/index.js";

// Tạo connection pool
const connection = mysql.createPool({
  host: "localhost",
  user: "QLong",
  database: "fullstack",
  password: "123456",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Hàm băm mật khẩu
const hashedUserPassword = async (userPassword) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userPassword, saltRounds);
  return hashedPassword;
};

// Hàm tạo người dùng mới
const createNewUser = async (email, password, username) => {
  const hashedPassword = await hashedUserPassword(password);

  try {
    await db.User.create({
      email: email,
      password: hashedPassword,
      username: username,
    });
  } catch (error) {
    console.log("Lỗi tạo user:", error);
    throw error;
  }
};

const getListUser = async () => {
  /* let users = [];
  users = await db.User.findAll();
  return users; */
  try {
    const [results] = await connection.execute("SELECT * FROM Users");

    return results;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách người dùng:", error);

    return [];
  }
};

const deleteUserById = async (id) => {
  try {
    const [results] = await connection.execute("DELETE FROM Users WHERE id=?", [
      id,
    ]);
  } catch (error) {
    console.error("Lỗi khi xóa người dùng:", error);
    throw error;
  }
};
// Lấy thông tin người dùng theo ID
const getUserById = async (id) => {
  try {
    const [results] = await connection.execute(
      "SELECT * FROM Users WHERE id=?",
      [id]
    );
    return results[0] || null;
  } catch (error) {
    console.error("Lỗi khi cập nhật người dùng:", error);
    throw error;
  }
};
const updateUserById = async (email, username, id) => {
  try {
    const [results] = await connection.execute(
      "UPDATE Users SET email=?, username=? WHERE id=?",
      [email, username, id]
    );
    return results[0] || null;
  } catch (error) {
    console.error("Lỗi khi cập nhật người dùng:", error);
    throw error;
  }
};
export default {
  createNewUser,
  getListUser,
  deleteUserById,
  getUserById,
  updateUserById,
};
