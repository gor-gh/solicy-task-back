require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const errorsController = require('./controllers/errorsController');

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/', router);
app.use(errorsController.internalServerError);

app.listen(process.env.PORT || 3000, () => {
  console.log(`The server is running on port ${process.env.PORT}`);
})