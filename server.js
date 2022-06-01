const express = require ("express");
const mongoose = require ("mongoose");
const app = express();
const bodyParser = require("body-parser");
const Jwt = require("jsonwebtoken");
var apiRouter = require("./apiRouter").router;
const dbConfig = require('./models/dbConfig');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



// Fix CORS errors through response headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.send();
    }
    next();
})

mongoose.Promise=global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    () => {
        console.log("MongoDb connected")
    },
    (error) =>{
        console.log(error)
    }
),
/*function jwtVerification(req,res,next){
      //const idToken=req.h
 
};*/

/*app.use('/',(req,res)=>{
     const idToken = req.headers.authorization;
    Jwt.verify(idToken,publicKey,(err,decoded)=>{
         if(err) return res.status(401).json({'err':err});
         res.send(idToken);
    })
});*/

app.use('/api/',apiRouter)
app.listen(8080,console.log('Server connected'));