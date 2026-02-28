const testApi = (req, res) => {
  return res.status(200).json({
    message: "Hello from API controller",
    data: "Test API",
  });
};
const register = (req, res) => {
  console.log("check :", req.body);

  return res.status(200).json({
    message: "Register API working",
    data: req.body,
  });
};
export default {
  testApi,
  register,
};
