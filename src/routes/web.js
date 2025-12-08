// dùng để cấu hình các route cho giao diện web
import express from "express";
import {
  handleHelloWorld,
  handleUserPage,
} from "../controller/homeController.js";
const router = express.Router();
const initWebRoutes = (app) => {
  router.get("/", handleHelloWorld);
  router.get("/user", handleUserPage);
  return app.use("/", router);
};
export default initWebRoutes;
