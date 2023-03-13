import express from "express";
import { validate } from "@lib";
import { container } from "../../../di-setup";
import { AuthSchema } from "./auth.schema";

const authRouter = express.Router();
const authController = container.resolve("authController");

authRouter.post("/signup", validate("body", AuthSchema), authController.signup);
authRouter.post("/signin", validate("body", AuthSchema), authController.signin);
authRouter.get("/logout", authController.logout);

export default authRouter;
