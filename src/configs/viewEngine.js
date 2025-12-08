// Cấu hình Template Engine (Bộ tạo giao diện)
// Cấu hình thư mục tĩnh (Static Files)
import express from "express";

const configViewEngine = (app) => {
  app.use(express.static("./src/public")); // Cấu hình thư mục chứa các file tĩnh
  app.set("view engine", "ejs"); // Sử dụng EJS làm code html động cho phía server
  app.set("views", "./src/views"); // Cấu hình thư mục chứa các file giao diện
};

export default configViewEngine;
