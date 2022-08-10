const fs = require('fs');
const formationReport = (req, res) => {
    const id = 0;
     const {
        name_Report,
        numero,
        region,
        lieu,
        mois,
        cirfinValue,
        debut,
        fin,
        theme,
        sousTheme,
        objectif,
        formateur,
        participant,
        observation,
       
       
    }=req.body
     try{
        
        const finished = (error) => {
            if (error){
                console.log(error);
                return;

            }
        }
        const saveData=( )=>{

            var formation= {
                "name_Report":name_Report,
                "id": id,
                "numero":numero,
                "region": region,
                "lieu":lieu,
                "cirfin":cirfinValue,
                "mois": mois,
                "debut": debut,
                "fin": fin,
                "theme": theme,
                "sousTheme": sousTheme,
                "objectif":objectif,
                "formateur":formateur,
                "participant":participant,
                "observation":observation,
         }
         fs.readFile('formation.json',"utf-8",(err,data)=>{
                  var json=JSON.parse(data);
                  formation.id=(json.length)+1;
                  json.push(formation);
                  fs.writeFileSync('formation.json',JSON.stringify(json),finished);
            });
        }
        return res.json(JSON.stringify(saveData()));
     }catch(error){
         console.log(error);
    }
}
module.exports={formationReport}