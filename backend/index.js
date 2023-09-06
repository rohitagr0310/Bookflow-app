import express, { json } from "express";
import { contentSecurityPolicy } from "helmet";
import cors from "cors";
import adminrouter from "./routes/adminRoutes.js";
import AuthRouter from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

// API routes
app.use("/api/status", statusRoute);
app.use("/api/admin", adminrouter);
app.use("/auth", AuthRouter);

// Use helmet middleware with CSP settings
app.use(
  contentSecurityPolicy({
    directives: {
      // Add font-src directive to allow font loading from your backend
      "font-src": ["'self'", "http://localhost:5000"]
      // Add other directives as needed
      // ...
    }
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
