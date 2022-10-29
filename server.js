require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const contactsRoutes = require("./Routes/Contacts");

//express app
const app = express();

//middleware
app.use(express.json()); //we use this for sending data for example post and patch
app.use((req, res, next) => {
    console.log(req.path, res.method);
    next();
});

//routes
app.use("/api/contacts", contactsRoutes);
// conect to db
mongoose
    .connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(
                "connected to database and listen on port:",
                process.env.PORT
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });

// //middleware
// app.use(express.json());
// app.use(cors());
// app.use((req, res, next) => {
//     console.log(req.path, res.method);
//     next();
// });

// //routes
// app.use("api/users");

// //connect to db
// mongoose
//     .connect(process.env.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => {
//         //listen for requests
//         app.listen(process.env.PORT, () => {
//             console.log(
//                 "connected to database and listen on port ",
//                 process.env.PORT
//             );
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
