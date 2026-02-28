import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import initApiRoutes from "./routes/api.js";
import configCors from "./config/cors.js";

dotenv.config();
const app = express();

// Cấu hình giao diện
configViewEngine(app);

// Parse form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS
configCors(app);

// Routes
initWebRoutes(app);
initApiRoutes(app);

// PORT
const PORT = process.env.PORT || 8080;



app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
