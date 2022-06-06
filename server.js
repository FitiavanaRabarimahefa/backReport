const express = require ("express");
const mongoose = require ("mongoose");
const app = express();
//const http=require('http').Server(app);
//const io= require("socket.io")(http);
const bodyParser = require("body-parser");
var apiRouter = require("./apiRouter").router;
const dbConfig = require('./models/dbConfig');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*io.on("connection",function(socket){
      console.log("connected");
      socket.on('getJson',function(data){
          console.log(data);
      })
});*/


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

app.use('/api/',apiRouter);
app.listen(8080,console.log('Server connected'));