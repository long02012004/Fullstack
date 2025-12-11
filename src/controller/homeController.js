import userService from "../service/userService.js";

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
  /* await userService.createNewUser(email, password, username); */
  await userService.getListUser();

  return res.send("Tạo thành công user");
  console.log("Kết quả so sánh mật khẩu:", check);
};

export { handleHelloWorld, handleUserPage, handleCreateNewUser };
