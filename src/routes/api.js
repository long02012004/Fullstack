// dùng để tạo các route API
import express from "express";

import apiController from "../controller/apiController.js";
const router = express.Router();
const initApiRoutes = (app) => {
  //rest api
  router.get("/test-api", apiController.testApi);
  router.post("/register", apiController.register);
  return app.use("/api/v1/", router);
};
export default initApiRoutes;
