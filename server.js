const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//accessing public folder
app.use(express.static("public"));

//connects to routes
app.use(require("./routes/pageRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

//connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false
})

//start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  