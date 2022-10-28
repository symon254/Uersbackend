require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, res.method);
    next();
});

//routes
app.use("api/workouts", workoutRoutes);

//connect to db
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(
                "connected to database and listen on port ",
                process.env.PORT
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
