const express = require("express");
const ConnectDB = require("./config/db");
const dotenv = require("dotenv").config({ path: "./config/.env" });
const morgan = require("morgan");
const cors = require("cors");

// route file import
const tirthankarRoute = require("./routes/tirthankarRoute");
const travelDiaryRoute = require("./routes/travelDiaryRoute");
const blogRoute = require("./routes/blogRoute");
const userRoute = require("./routes/userRoute");
const templeRoute = require("./routes/templeRoute");
const sikharjiRoute = require("./routes/sikharjiRoute");
const JainismRoute = require("./routes/jainismRoute");
const imageRoute = require("./routes/imageRoute");

// database and middlwares
const app = express();
console.log("MongoDB URI:", process.env.MONGO_URI);
ConnectDB();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/tirthankar", tirthankarRoute);
app.use("/diary", travelDiaryRoute);
app.use("/blog", blogRoute);
app.use("/user", userRoute);
app.use("/temple", templeRoute);
app.use("/sikharji", sikharjiRoute);
app.use("/jainism", JainismRoute);
app.use("/image", imageRoute);

app.listen(process.env.PORT, () => {
  console.log(`server is listening at ${process.env.PORT} `);
});
