import express from "express";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { userRouter } from "../route/api.js";
import { publicRouter } from "../route/public-api.js";

export const web = express();

web.use(express.json());
web.use(errorMiddleware)
web.use(publicRouter);
web.use(userRouter);
