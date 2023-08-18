// server/routes/statusRoute.js

import { Router } from "express";
const statusRoute = Router();

statusRoute.get("/", (req, res) => {
  res.json({ message: "Backend is connected!" });
});

export default statusRoute;
