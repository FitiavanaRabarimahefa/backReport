const fs = require('fs');

const getJson = (req,res) =>{
    fs.readFile('report.json',"utf-8",(err,data)=>{
       const tabJson = JSON.stringify(data,null,3);
       return res.json(JSON.parse(tabJson));
    })
    
}
module.exports={getJson};