const express = require('express')
const app = express()
const port = process.env.PORT | 3000 
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
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


const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`);
  })