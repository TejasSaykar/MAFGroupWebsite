const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");
const newsRoute = require("./routes/newsRoute");
const multer = require("multer");
const path = require("path");
const https = require("https");
const fs = require("fs");

const app = express();

// config env
dotenv.config();

// database call
connectDb();

app.get("/", (req, res) => {
  res.send("Hello from MAF Group api");
});

// middlewares
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

// Multer Image Upload

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json("Image not uploaded");
  }
  res.status(200).json("File has been uploaded");
});

// Routing
app.use("/api/user", userRoute);
app.use("/api/blog", blogRoute);
app.use("/api/news", newsRoute);

const PORT = 8585;
const appInProduction = true;
if (!appInProduction) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} ✅`);
  });
} else {
  const httpsOptions = {
    key: fs.readFileSync("./config/https/private.key"),
    cert: fs.readFileSync("./config/https/certificate.crt"),
    ca: [fs.readFileSync("./config/https/ca_bundle.crt")],
  };

  https.createServer(httpsOptions, app).listen(PORT, (error) => {
    if (error) {
      console.error("Error starting HTTPS server:", error);
    } else {
      console.log(
        `Server running on https://154-56-63-113.cprapid.com:${PORT} ✅`
      );
    }
  });
}
