const mongoose = require("mongoose");
const config = require("config");

function connectDB() {
  mongoose
    .connect(config.get("mongodb+srv://brandoncarlson93bc:Kendra2020!!@cluster0.aypea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => {
      console.log(`Could not connect to MongoDB. ERROR: ${err}`);
      process.exit(1);
    });
}
module.exports = connectDB;