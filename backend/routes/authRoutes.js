import { Router } from "express";
import authController from "../controllers/authController.js";

const AuthRouter = Router();

AuthRouter.post("/signup", authController.signup);

AuthRouter.post("/login", authController.login);

export default AuthRouter;
