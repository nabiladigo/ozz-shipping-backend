const router = require('express').Router();

const {Package} = require('../models/index');


router.get('/', async(req, res)=>{
    try{
        res.json(await Package.find({}));
    }catch(error){
        res.status(400).json(error);
    }
});
router.post('/', async(req, res)=> {
    try{
        res.json(await Package.create(req.bosy));
    }catch(error){
        res.status(400).json(error);
    }
});
router.get('/:id', async(req, res)=>{
    try{
        res.json(await Package.findOne({"_id": req.params.id}));
    }catch(error){
        res.status(400).json(error);
    }
});
router.put('/:id', async(req, res)=> {
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
    }catch(error){
        return res.status(500).json(error);
    }
});
router.delete('/:id', async(req, res)=>{
    try{
        res.json( await Package.findByIdAndRemove(req.params.id));
    }catch(error){
        res.status(400).json(error);
    }
});


module.exports =router;