// dùng để cấu hình các route cho giao diện web
import express from "express";
import {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
} from "../controller/homeController.js";
const router = express.Router();
const initWebRoutes = (app) => {
  router.get("/", handleHelloWorld);
  router.get("/user", handleUserPage);
  router.post("/users/create-user", handleCreateNewUser);
  router.post("/delete-user/:id", handleDeleteUser);
  return app.use("/", router);
};
export default initWebRoutes;
