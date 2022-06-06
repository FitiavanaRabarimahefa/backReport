const fs = require('fs');
const mensualModel=require("../models/mensualReportModel");

const mensualReport = async (req,res) => {
    const id=0;
    const {
        lieu,
        produit,
        realisation,
        valeurCible,
        pourcentageRealisation
    }=req.body
 try{
        
        const finished = (error) => {
            if (error){
                console.log(error);
                return;

            }
        }
        const saveData=( )=>{

            var BAAF={
                "id":id,
                "produit":produit,
                "realisation":realisation,
                "valeurCible":valeurCible,
                "pourcentageRealisation":pourcentageRealisation
           }
            
            fs.readFile('report.json',"utf-8",(err,data)=>{
                  var json=JSON.parse(data);
                  BAAF.id=(json.length)+1;
                  json.push(BAAF);
                  fs.writeFileSync('report.json',JSON.stringify(json),finished);
            });
            
          }
        return res.json(JSON.stringify(saveData()));
        

    }catch(error){
         console.log(error);
    }

}
module.exports={mensualReport};