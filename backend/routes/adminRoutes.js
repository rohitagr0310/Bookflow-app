import { Router } from "express";
import adminController from "../controllers/adminController.js";

const adminrouter = Router();

// Define routes
adminrouter.get("/admin", adminController.getAllAdmins);

adminrouter.post("/addBook", adminController.addBook);

adminrouter.get("/all-books", adminController.getAllBooks);

export default adminrouter;
