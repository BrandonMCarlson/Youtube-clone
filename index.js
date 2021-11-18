const connectDB = require("./startup/db");
const express = require('express');
const cors = require('cors');
const app = express();
const config = require('config');

const comments = require('./routes/Comments');



connectDB();


app.use(express.json());
app.use('/api/comments', comments);

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});