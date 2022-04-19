const express = require('express');
const cors =require('cors');
const morgan = require('morgan');

require('dotenv').config()


const session = require("express-session");
const MongoStore = require("connect-mongo");

const controllers =require('./controllers/index');

const app = express();
const PORT = process.env.PORT || 4000;

/* SECTION App Config */

// app.use(
//     session({
//         // where to store the sessions in mongodb
//          store:MongoStore.create({ mongoUrl:"mongodb://localhost:27017/shipping"}),
//         //  secret key is used to sign every cookie to say its is valid
//         secret: "super secret",
//         resave: false,
//         saveUninitialized: false,
//         // configue the experation pof the cookie
//         copkie:{
//             maxAge: 1000 * 60 *60* 24 * 7 *2,
//             // two weeks
//         },
//     })
// );
console.log("=====================")
console.log("=====================")

// figure out how to make the session work
// console.log(req.session)
console.log("=====================")
console.log("=====================")

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/packages', controllers.package);
app.use('/user', controllers.user);

app.get('/', (req, res)=>{
    res.send("Hello world!");
});

app.get('/*', (req, res)=>{
    const context ={error: req.error};
    return res.status(404).render('404', context);
});


app.listen(PORT, ()=>
console.log(`Listening for client requests on ${PORT}`));