const express= require('express');
const router = express.Router();

const {Package} = require('../models');


router.get('/', async(req, res)=>{
    try{
        res.json(await Package.find({}));
    }catch(err){
        res.status(400).json(err);
    }
});