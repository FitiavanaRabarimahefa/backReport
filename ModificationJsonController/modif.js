const fs=require('fs');
const editJson= async (req,res)=>{
    //const {identifiant,produit,realisation,valeurCible,pourcentageRealisation}=req.body;
    fs.readFile('report.json',"utf-8",(err,data)=>{
         const json=JSON.stringify(data)
         return res.json(JSON.parse(data));
    })
}

module.exports={editJson}