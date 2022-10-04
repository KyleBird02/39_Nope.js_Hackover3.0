const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//Routes
const auth = require("./routes/auth");

// Constants
const PORT = process.env.PORT || 3000;
var corsOptions = {
    origin: "*",
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true }, (err) => {
    console.log("Conected to DB");
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/auth", (req, res) => {
    res.send("Auth");
});

// Auth
app.use("/auth", auth);

app.listen(PORT, () => {
    console.log(`Application running on port : ${PORT}`);
});
