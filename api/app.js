const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");


const app = express();

// Configuration
dotenv.config();
connectDb();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRoute);
app.use("/api/blog", blogRoute);



const port = 8080 || process.env.PORT;
app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
})