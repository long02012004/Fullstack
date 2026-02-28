import db from "../models/index.js";
import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};
const checkEmailExist = async (userEmail) => {
  let user = await db.User.findOne({
    where: { email: userEmail },
  });
  if (user) {
    return true;
  }
  return false;
};
const checkPhoneExist = async (userPhone) => {
  let user = await db.User.findOne({
    where: { phone: userPhone },
  });
  if (user) {
    return true;
  }
  return false;
};
const registerNewUser = async (rawData) => {
  try {
    // rawData là dữ liệu thô nhận được từ client khi gọi API đăng ký
    // Kiểm tra xem email  và phone đã tồn tại trong cơ sở dữ liệu hay chưa
    let isEmailExist = await checkEmailExist(rawData.email);
    if (isEmailExist === true) {
      return {
        EM: "Your email is already in use, please choose another email",
        EC: 1,
      };
    }
    let isPhoneExist = await checkPhoneExist(rawData.phone);
    if (isPhoneExist === true) {
      return {
        EM: "Your phone number is already in use, please choose another phone number",
        EC: 1,
      };
    }
    //hash password trước khi lưu vào database
    let hashPassword = hashUserPassword(rawData.password);

    // create new user in database
    await db.User.create({
      email: rawData.email,
      password: hashPassword,
      username: rawData.username,
      phone: rawData.phone,
    });
    return {
      EM: "Register successfully",
      EC: 0,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Error from server",
      EC: -1,
    };
  }
};

export default { registerNewUser };
