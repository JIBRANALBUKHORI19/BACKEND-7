const express = require('express');
const app = express();
const port = 8080;
const routerMahasiswa = require('./routers/mahasiswa')

app.use (express.json());
app.use(express.urlencoded({extended:true}));
app.use(routerMahasiswa)

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error : "));
db.once("open", function(){
    console.log("sukses terkoneksi dengan mongodb");
})

app.listen(port, () => {
    console.log(`server dengan localhost:${port}`)
})