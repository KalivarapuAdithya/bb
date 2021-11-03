const express = require('express')
const router = express.Router();
const db = require('../models');

router.get('/users',async (req , res , next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
    let users = await db.User.find({})
    res.json(users)
})

router.get('/user/:id' , async(req , res , next)=>{
    try {
        let user = await db.User.findById({_id : req.params.id});
        res.json(user);
    } catch (error) {
        next(error)
    }
})

router.post('/users' , async (req , res , next) => {
    try {
        let user = await db.User.create(req.body);
        res.json(user)
    } catch (error) {
        next(error)
    }
})

router.put('/user/:id' , async (req , res , next)=>{
    try {
        let data = {name : req.body.name , username : req.body.username};
        let user = await db.User.findByIdAndUpdate({_id : req.params.id} , data , {new : true});
        res.json(user)
    } catch (error) {
        next(error)
    }
})

router.delete('/user/:id' , async (req , res , next)=>{
    try {
        let user = await db.User.findByIdAndDelete({_id : req.params.id});
        res.json(user);
    } catch (error) {
        next(error)
    }
})

module.exports = router

