const router = require('express').Router();

const {Package} = require('../models/index');


router.get('/', async(req, res)=>{
    try{
        res.json(await Package.find({}));
    }catch(err){
        res.status(400).json(err);
    }
});
router.get('/:id', async(req, res)=>{
    try{
        res.json(await Package.findOne({"_id": req.params.id}));
    }catch(err){
        res.status(400).json(err);
    }
});
router.post('/', async(req, res)=> {
    try{
        res.json(await Package.create(req.bosy));
    }catch(err){
        res.status(400).json(err);
    }
});
router.put('/edit/:id', async(req, res)=> {
    try{
        const{image, price, title, weight} = req.body;
        const package = await Package.findByIdAndUpdate(req.params.id, 
            {
                $set: req.body,
            },
            {new: true,
            }
        );
        const editPackage = packege.save();
        return res.status(200).json(editPackage);
    }catch(err){
        return res.status(500).json(err);
    }
});
router.delete('/delete/:id', async(req, res)=>{
    try{
        res.json( await Package.findByIdAndRemove(req.params.id));
    }catch(err){
        res.status(400).json(err);
    }
});


module.exports =router;