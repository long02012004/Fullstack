import bcrypt from "bcrypt";
import mysql from "mysql2/promise";

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
  try {
    const hashedPassword = await hashedUserPassword(password);

    const [results] = await connection.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    console.log("Tạo user thành công:", results);
    return results; // trả dữ liệu cho hàm gọi nó xử lý
  } catch (error) {
    console.log("Lỗi tạo user:", error);
    throw error;
  }
};

const getListUser = async () => {
  try {
    const [results] = await connection.execute("SELECT * FROM users");

    return results;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách người dùng:", error);

    return [];
  }
};

export default { createNewUser, getListUser };
