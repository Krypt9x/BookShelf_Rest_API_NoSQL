const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes')
const cors = require('cors');
const mongoDbUrl = "mongodb+srv://UsernameUser:PasswordUser@cluster0.eiimrmo.mongodb.net/MyDatabase";


mongoose.connect(mongoDbUrl);
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});

db.once('connected', () => {
    console.log('Database connected');
})
//const app = express();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/', routes);


app.listen(3000, () => {
    console.log(`Server is running...`)
});
