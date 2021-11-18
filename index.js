const connectDB = require("./startup/db");
const express = require('express');
const app = express();
const comments = require('./Routes/Comments');



connectDB();


app.use(express.json());
app.use('/api/comments', comments);

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});