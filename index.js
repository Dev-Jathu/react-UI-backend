//connect to mongoose

const mongoose = require('mongoose');
const URI = "mongodb+srv://jathusankunam005:jathu123@cluster0.aiaewvw.mongodb.net/TO-DO?retryWrites=true&w=majority&appName=Cluster0";
const data = require ('./model/ToDo')

mongoose.connect(URI)
//schema 

    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) =>{
        console.log('Not connected to mongodb',error);
    })

//connect to express

const express = require('express');
const app = express();
app.use(express.json())

app.listen(3000, () =>{
    console.log('your express is connected')
})

// check for express

app.get('/home',(req,res) =>{
    res.send('Welcome to jathusan')
})

