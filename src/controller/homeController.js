import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "localhost",
  user: "QLong",
  database: "fullstack",
  password: "123456",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = async (req, res) => {
  // Lấy dữ liệu người dùng gửi lên
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  try {
    // Thực hiện lệnh INSERT
    const [results, fields] = await connection.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );

    console.log("Kết quả tạo user:", results);
    return res.send("Tạo thành công user");
  } catch (error) {
    console.log("Lỗi tạo user:", error);
    return res.send("Lỗi khi tạo user: " + error.message);
  }
};

export { handleHelloWorld, handleUserPage, handleCreateNewUser };
