const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDb = require("./config/db")
const userRoute = require("./routes/userRoute")
const blogRoute = require("./routes/blogRoute")
const newsRoute = require("./routes/newsRoute")
const multer = require("multer")
const path = require('path');

const app = express();

// config env
dotenv.config();

// database call
connectDb();

// middlewares
app.use(express.json())
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

// Multer Image Upload

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json("Image not uploaded")
    }
    res.status(200).json("File has been uploaded")
})



// Routing
app.use("/api/user", userRoute)
app.use("/api/blog", blogRoute)
app.use("/api/news", newsRoute)



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})