import { Router } from "express";
import { productsRouter } from "../routes/product.routes.js";

export const globalRouter = Router();

globalRouter.use("/products", productsRouter);
globalRouter.use("/courses", coursesRouter);