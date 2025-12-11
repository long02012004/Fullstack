import userService from "../service/userService.js";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  const listUser = await userService.getListUser();

  return res.render("user.ejs", { listUser });
};

const handleCreateNewUser = async (req, res) => {
  // Lấy dữ liệu người dùng gửi lên
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  await userService.createNewUser(email, password, username);

  return res.send("Tạo thành công user");
  console.log("Kết quả so sánh mật khẩu:", check);
};

export { handleHelloWorld, handleUserPage, handleCreateNewUser };
