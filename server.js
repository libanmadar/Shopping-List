const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI

mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.use('/api/items', items)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))

