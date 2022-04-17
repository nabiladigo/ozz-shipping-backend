const express = require('express');
const cors =require('cors');
const morgan = require('morgan');

// const controllers =require('./controllers');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use('/packages', controllers.package);
// app.use('/user', controllers.user);

app.get('/', (req, res)=>{
    res.send("Hello world!");
});

app.get('/*', (req, res)=>{
    const context ={error: req.error};
    return res.status(404).render('404', context);
});


app.listen(PORT, ()=>
console.log(`Listening for client requests on ${PORT}`));