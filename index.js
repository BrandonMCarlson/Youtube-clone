const connectDB = require("./startup/db");
const express = require('express');
const app = express();
const products = require('./routes/products');


connectDB();

app.use(express.json());
app.use('/api/products', products);

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});