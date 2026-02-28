import dotenv from "dotenv";
dotenv.config();

const configCors = (app) => {
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", process.env.REACT_URL);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );

    // xử lý preflight request
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }

    next();
  });
};

export default configCors;
