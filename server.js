const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const information = require('./routes/api/Information');
const devices = require('./routes/api/devices');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

// Use routes
app.use('/api/information', information);
app.use('/api/devices', devices);

const port = 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
