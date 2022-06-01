const { json } = require('body-parser');
const fs = require('fs');
const { finished } = require('stream');
const mensualModel=require("../models/mensualReportModel");

const mensualReport = async (req,res) => {

    const {
        lieu,
        produit,
        realisation,
        valeurCible,
        pourcentageRealisation
    }=req.body

    /*try{
        const newReportMensual= await mensualModel.create({
            BAAF:
                { 
                //lieu,

                produit,

                 realisation,
                              
                valeurCible ,
        
                pourcentageRealisation,
                             
                }
               
            
        })
        console.log(req.body);

        return res.status(200).json({newReportMensual});
        
    }catch(error){
        return res.status(404).json({'erreur':error.message});
    }*/

    var BAAF={
        "produit":produit,
        "realisation":realisation,
        "valeurCible":valeurCible,
        "pourcentageRealisation":pourcentageRealisation
   };
  
    try{
        
        const finished = (error) => {
            if (error){
                console.log(error);
                return;

            }
        }
        const saveData=(report)=>{
           fs.readFile('report.json',"utf-8",(err,data)=>{
                  var json=JSON.parse(data);
                  json.push(report);
                  fs.writeFileSync('report.json',JSON.stringify(json),finished);
            });
            
          }
        return res.json(JSON.stringify(saveData(BAAF)));
        

    }catch(error){
         console.log(error);
    }

}
module.exports={mensualReport};