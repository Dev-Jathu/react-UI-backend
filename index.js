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

//post method
app.post('/createdata',async (req,res) =>{

   try{ const createData= new data(req.body);
    const input= await createData.save();
    res.send(input)
    console.log(input)

   }
   catch (error){
    console.log(error);
   }
})

//get method
app.get('/getdata',async (req,res) =>{
    try{
        const output = await data.find()
        console.log(output);
        res.status(200).json(output)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})



