const express = require('express')
const app = express()
const port = process.env.PORT | 3000 
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const path = require('path');

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

require('dotenv').config();

mongoose
.connect(
  "mongodb+srv://manthanank:" +
    process.env.MONGO_ATLAS_PW +
    "@cluster0.re3ha3x.mongodb.net/social-media"
)
.then(() => {
  console.log("Connected to database!");
})
.catch(() => {
  console.log("Connection failed!");
});

app.use('/', express.static(path.join(__dirname, 'public')))
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`);
  })