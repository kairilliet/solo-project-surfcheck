// SERVER FILE
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const fileController = require('./controllers/fileController.js'); 
const cors = require('cors');

const apiRouter = require('./routes/api.js')
app.use(cors())
app.get('/', fileController.getSurfSpots, (req, res) => {
    console.log("SHOW ME THE DATA: ", res.locals.oahu);
    return res.status(200).json({ oahuSurfSpots: res.locals.oahu});

});

app.use('/api', apiRouter);

app.listen(3000); // listens on port 3000 -> http://localhost:3000/