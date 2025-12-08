// dùng để cấu hình các route cho giao diện web
import express from "express";
const router = express.Router();
const initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello from Home Page");
    });
    return app.use("/", router);
};
export default initWebRoutes;