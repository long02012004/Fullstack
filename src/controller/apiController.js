import loginRegisterService from "../service/loginRegisterService.js";
const testApi = (req, res) => {
  return res.status(200).json({
    message: "Hello from API controller",
    data: "Test API",
  });
};
const register = async (req, res) => {
  try {
    // Kiểm tra xem các trường bắt buộc có tồn tại trong body của request hay không
    if (!req.body.email || !req.body.phone || !req.body.password) {
      return res.status(200).json({
        EM: "Missing required parameters",
        EC: 1,
        DT: "",
      });
    }
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(200).json({
        EM: "Password must be at least 6 characters",
        EC: 1,
        DT: "",
      });
    }
    // Nếu tất cả các trường bắt buộc đều tồn tại, gọi hàm registerNewUser để xử lý đăng ký người dùng mới
    let data = await loginRegisterService.registerNewUser(req.body);
    // Nếu tất cả các trường bắt buộc đều tồn tại, trả về phản hồi thành công
    return res.status(200).json({
      EM: data.EM, // Error message from service
      EC: data.EC, // Error code from service
      DT: data.DT, // Data returned from service
    });
  } catch (error) {
    // Nếu có lỗi xảy ra trong quá trình xử lý, trả về phản hồi lỗi
    return res.status(500).json({
      EM: "Error from server", // Error from server
      EC: -1, // Error code -1 indicates a server error
      DT: "",
    });
  }
};
export default {
  testApi,
  register,
};
