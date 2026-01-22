const express = require('express');
const serviceRoute = require('./router/Service-router');
const cors = require('cors');


const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Ritesh');
});

app.use("/api", serviceRoute);

module.exports = app;
