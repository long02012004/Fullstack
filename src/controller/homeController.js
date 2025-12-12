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

  return res.redirect("/user");
};
const handleDeleteUser = async (req, res) => {
  const listUser = await userService.deleteUserById(req.params.id);
  return res.redirect("/user");
};
const getUpdateUserPage = async (req, res) => {
  let id = req.params.id;
  let userData = await userService.getUserById(id);
  if (!userData) {
    return res.send("User not found");
  }
  return res.render("update-user.ejs", { userData });
};
const handleUpdateUser = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let id = req.body.id;
  await userService.updateUserById(email, username, id);
  return res.redirect("/user");
};
export {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
  getUpdateUserPage,
  handleUpdateUser,
};
