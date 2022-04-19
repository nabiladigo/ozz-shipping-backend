// need to add authauntication here
const router = require('express').Router();
const {User} = require('../models/index');

router.get('/', async(req, res)=>{
    try{
        res.json(await User.find({}));
    }catch(error){
        res.status(400).json(error);
    }
});
router.post('/singup', async(req, res)=>{
    try{
        const {firstname, lastname, username, email, password, passwordConfirmation} = req.body;
        if(!(firstname ||lastname || username||email ||password)){
            res.status(400).send("Please fill out all fields")
        }
        if(password.length <6){
            return res.status(400).send("password must be at least 6 characters")

        }
        if(password !== passwordConfirmation){
            return res.status(400).send("Paswword do not match");
        }
            console.log("=====================")
            console.log("=====================")
            console.log(req.body)
            console.log("=====================")
            console.log("=====================")
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(409).send("User aleardy exist");
        }
        const newUser = new User({
            firstname,
            lastname,
            username,
            email,
            password,
            passwordConfirmation,
        });
        console.log("=====================")
        console.log("=====================")
        console.log(newUser);
        console.log("=====================")
        console.log("=====================")
        const userAdded = await newUser.save()
        return  res.send(userAdded)
    }catch(error){
        console.log(error.message)
        return res.status(400).send("Sign up error");
    }
});
router.get('/login', async(req, res)=>{
    try{
        const {username, email, password} = req.body;
        console.log("=====================")
        console.log("=====================")
        conaole.log(req.body);
        console.log("=====================")
        console.log("=====================")

        if(!( username|| email || password)){
            return res.status(400).json("Please fill out all fields");
        }
        const user = await User.findOne({email: email
            // , username: username
        });
        // const isMatch = await bcrypt.compare(password, user.password);
        if (user && isMatch){
            return res.status(200).json("Logged in successfully")
        }
    }catch(error){
        console.log("=====================")
        console.log("=====================")
        console.log(error.message)
        console.log("=====================")
        console.log("=====================")
        return res.status(404).json("Invalid Credentials")
    }
})
router.get('/logout', async(req, res)=> {
    try{
        await req.session.destroy();
        res.json("you logged out")
    }catch(error){
        res.status(404).json(error)
    }
})
router.put('/:id', async(req, res)=>{
    try{
        res.json(
            await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
        )
    }catch(error){
        res.status(400).json(error)
    }
})
router.delete('/:id', async(req, res)=>{
    try{
        res.json(await User.findByIdAndRemove(rreq.params.id));
    }catch(error){
        res.status(400).json(error)
    }
})
router.get('/:id', async(req, res)=>{
    try{
        res.json(await User.findById({"_id": req.params.id}))
    }catch(error){
        RTCRtpSender.status(400).json(error)
    }
})

module.exports = router;