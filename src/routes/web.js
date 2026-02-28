// dùng để cấu hình các route cho giao diện web
import express from "express";
import {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
  getUpdateUserPage,
  handleUpdateUser,
} from "../controller/homeController.js";
import apiController from "../controller/apiController.js";
const router = express.Router();
const initWebRoutes = (app) => {
  router.get("/", handleHelloWorld);
  router.get("/user", handleUserPage);
  router.post("/users/create-user", handleCreateNewUser);
  router.post("/delete-user/:id", handleDeleteUser);
  router.get("/update-user/:id", getUpdateUserPage);
  router.post("/users/update-user", handleUpdateUser);

  //rest api
  router.get("/api/test-api", apiController.testApi);
  return app.use("/", router);
};
export default initWebRoutes;
