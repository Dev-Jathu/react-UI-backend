//connect to mongoose
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express(); // Define app before using it
app.use(express.json()); // Middleware for parsing JSON requests
app.use(cors()); // Middleware for enabling CORS

const URI = "mongodb+srv://jathusankunam005:jathu123@cluster0.aiaewvw.mongodb.net/TO-DO?retryWrites=true&w=majority&appName=Cluster0";
const data = require('./model/ToDo');

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Not connected to MongoDB', error);
    });

// check for express
app.get('/home', (req, res) => {
    res.send('Welcome to jathusan');
});

//post method
app.post('/createdata', async (req, res) => {
    try {
        const createData = new data(req.body);
        const input = await createData.save();
        res.send(input);
        console.log(input);
    } catch (error) {
        console.log(error);
    }
});

//get method
app.get('/getdata', async (req, res) => {
    try {
        const output = await data.find();
        // console.log(output);
        res.status(200).json(output);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//update
app.put('/createdata/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await data.findByIdAndUpdate(id, req.body);
        const User = await data.findById(id);
        res.status(200).json(User);
    } catch (error) {
        console.log(error);
    }
});

//connect to express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Express server is listening on port', PORT);
});
