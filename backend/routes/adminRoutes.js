import { Router } from "express";
import adminController from "../controllers/adminController.js";

const adminrouter = Router();

adminrouter.post("/addBook", adminController.addBook);

adminrouter.get("/all-books", adminController.getAllBooks);

export default adminrouter;
