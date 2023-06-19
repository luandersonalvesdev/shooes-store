const express = require('express');
const employeeRoute = require('./routes/employeeRoute');

const app = express();
app.use(express.json());
app.use('/employee', employeeRoute);

app.get('/', (req, res) => res.status(200).json({ message: 'server are healthy' }));

app.use((req, res) => res.status(404).json({ message: 'not found' }));

module.exports = app;