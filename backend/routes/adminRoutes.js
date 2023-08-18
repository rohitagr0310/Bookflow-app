import { Router } from "express";

// Import adminController
import adminController from "../controllers/adminController.js";
const adminrouter = Router();

// Define routes
adminrouter.get("/admin", adminController.getAllAdmins);
// Add more routes for admin actions

export default adminrouter;
