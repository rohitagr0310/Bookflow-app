import { Router } from "express";
import adminController from "../controllers/adminController.js";

const adminrouter = Router();

adminrouter.post("/add-Book/test", adminController.addBookTest);

adminrouter.post("/add-Book/library", adminController.addBookLibrary);

adminrouter.get("/all-books/library", adminController.getAllBookslibrary);

adminrouter.get("/all-books/test", adminController.getAllBookstest);

// adminrouter.get("/all-books/bookbank", adminController.getAllBookslibrary);

export default adminrouter;
