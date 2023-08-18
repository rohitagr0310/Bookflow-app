// server/routes/bookRoutes.js

import { Router } from "express";

// Import bookController
import { getAllBooks, createBook } from "../controllers/bookController.js";
const router = Router();

// Define routes
router.get("/books", getAllBooks);
router.post("/books", createBook);
// Add more routes for book actions

export default router;
