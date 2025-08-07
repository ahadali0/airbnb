import express from "express";
import cors from "cors";

import { protect } from "./middleware/authMiddleware.js";
import { authorizeRoles } from "./middleware/userRoleMiddleware.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();

router.get("/", protect, authorizeRoles("admin", "manager", "user"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
