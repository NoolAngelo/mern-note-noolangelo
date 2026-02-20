import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import noteRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// app.use((req, res, next) => {
//   console.log(`request method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", noteRoutes);

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'",
    );
    next();
  });

  app.use(express.static(path.join(__dirname, "../../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../../frontend/dist/index.html"),
      (err) => {
        if (err) {
          console.error("Error sending index.html:", err);
          res.status(500).send("Server error");
        }
      },
    );
  });
}
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is started on port:", PORT);
  });
});
