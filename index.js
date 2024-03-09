const { default: mongoose } = require("mongoose");

const express = required('express');
const mongooose = required('mongoose');
const app = express();
const port =3000;

mongoose.connect('mongodb+srv://manish_hr14:wdwrz6nJ872628hR@cluster0.g0rioqa.mongodb.net/busbooking')
 
// create operation//
app.post('/user',async(req,res)=>{
    try{
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    catch (error){
        res.status(400).json({error:"server error"});
    }
});

app.post('/booking',async(req,res)=>{
    try{
        const newBooking = await User.create(req.body);
        res.json(newBooking);
    }
    catch (error){
        res.status(400).json({error:"server error"});
    }
});

app.post('/buses',async(req,res)=>{
    try{
        const newBuses = await User.create(req.body);
        res.json(newBuses);
    }
    catch (error){
        res.status(400).json({error:"server error"});
    }
});

