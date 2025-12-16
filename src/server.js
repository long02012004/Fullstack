// Tạo server với ExpressJS
import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
/* import connection from "./config/connectDB.js";
 */
import bodyParser from "body-parser"; //
require("dotenv").config(); // Load biến môi trường từ file .env

const app = express();

// Cấu hình giao diện
configViewEngine(app);

// parse application/x-www-form-urlencoded
// dùng để lấy dữ liệu từ form gửi lên
app.use(bodyParser.urlencoded());
// parse application/json
// dùng để parse dữ liệu dạng json
app.use(bodyParser.json());

// Khởi tạo các route cho giao diện web
initWebRoutes(app);

// test kết nối database
/*   connection();
 */
// Lắng nghe cổng
const PORT = process.env.PORT || 8080; // Lấy cổng từ biến môi trường hoặc mặc định là 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
