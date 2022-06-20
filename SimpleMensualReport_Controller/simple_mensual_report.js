const fs = require('fs');
//const mensualModel=require("../models/mensualReportModel");

const SaveMensualReport = async (req, res) => {
        const id=0;
    const {
        nameReport,
        region,
        mois,
        numero,
        cirfinValue,
        faits,
        observations
}=req.body
try{
        
        const finished = (error) => {
            if (error){
                console.log(error);
                return;

            }
        }
        const saveData=( )=>{

            var report = {
                "name_Report":nameReport,
                "id": id,
                "numero":numero,
                "region":region,
                "cirfin":cirfinValue,
                "mois": mois,
                "faits": faits,
                "observations":observations
           }
            
            fs.readFile('reportMensual.json',"utf-8",(err,data)=>{
                  var json=JSON.parse(data);
                  report.id=(json.length)+1;
                  json.push(report);
                  fs.writeFileSync('reportMensual.json',JSON.stringify(json),finished);
            });
            
          }
        return res.json(JSON.stringify(saveData()));
        

    }catch(error){
         console.log(error);
    }

    
}
module.exports={SaveMensualReport}