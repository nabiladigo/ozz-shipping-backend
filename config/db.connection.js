const mongoose = require('mongoose');
require('dotenv').config();


const {PORT = 4000, MONGODB_URL} = process.env;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true
    , useUnifiedTopology: true
}
);

mongoose.connection
    .on('open', () => console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`))
    .on('close', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'))
    .on('error', (error) => console.log('MongoDB connection error 😥', error));

