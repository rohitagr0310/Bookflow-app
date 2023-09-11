// server/routes/studentRoutes.js

import { Router } from "express";

// Import studentController
import { getAllStudents, createStudent } from "../controllers/studentController.js";
const router = Router();

// Define routes
router.get("/students", getAllStudents);
router.post("/students", createStudent);
// Add more routes for student actions

export default router;
