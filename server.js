const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//require routes here:
const userRoutes = require("./routes/user.routes");

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect("mongodb+srv://marylldriz:Chikit%400016@b-297.ynrfqyy.mongodb.net/inventoryDB?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let inventoryDB = mongoose.connection;
inventoryDB.on('error', console.error.bind(console, "connection error"));
inventoryDB.on('open', () => console.log("connected to mongoDB Atlas"))

//routes
// app.use("/api/users", userRoutes);

if(require.main === module){
    app.listen(port, () => console.log(`server is running at ${port}`));
}

module.exports = app;