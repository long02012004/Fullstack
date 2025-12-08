// Tạo server với ExpressJS
import express from "express";
import configViewEngine from "./configs/viewEngine.js";
import initWebRoutes from "./routes/web.js";
require("dotenv").config(); // Load biến môi trường từ file .env

const app = express();

// Cấu hình giao diện
configViewEngine(app);
// Khởi tạo các route cho giao diện web
initWebRoutes(app);

const PORT = process.env.PORT || 8080; // Lấy cổng từ biến môi trường hoặc mặc định là 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
