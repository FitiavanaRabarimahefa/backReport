const fs = require('fs');

const CRGPReport = (req, res) => {
    const id = 0;
     const {
        nameReport,
        numero,
        region,
        lieu,
        mois,
        cirfinValue,
        participant,
        ordreJour,
        observation,
        theme,
        probleme,
        solution
    }=req.body
     try{
        
        const finished = (error) => {
            if (error){
                console.log(error);
                return;

            }
        }
        const saveData=( )=>{

            var CRGP = {
                "name_Report":nameReport,
                "id": id,
                "numero":numero,
                "region": region,
                "lieu":lieu,
                "cirfin":cirfinValue,
                "mois":mois,
                "participant":participant,
                "ordreJour":ordreJour,
                "observation":observation,
                "theme": theme,
                "probleme": probleme,
                "solution":solution
           }
            
            fs.readFile('CRGP.json',"utf-8",(err,data)=>{
                  var json=JSON.parse(data);
                  CRGP.id=(json.length)+1;
                  json.push(CRGP);
                  fs.writeFileSync('CRGP.json',JSON.stringify(json),finished);
            });
            
          }
        return res.json(JSON.stringify(saveData()));
        

    }catch(error){
         console.log(error);
    }
}
module.exports = { CRGPReport };