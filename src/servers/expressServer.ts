import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export default {
  createExpressServer: () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(async (req, res, next) => {
      res.header("Local-Time", new Date().getTime().toString());
      next();
    });

    return app;
  },
};
