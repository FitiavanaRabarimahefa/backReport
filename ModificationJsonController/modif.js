const fs=require('fs');
const editJson= async (req,res)=>{
    
    const {id,produit,realisation,valeurCible,pourcentageRealisation}=req.body;
    

    const report={
        "produit":produit,
        "realisation":realisation,
        "valeurCible":valeurCible,
        "pourcentageRealisation":pourcentageRealisation
   };

   const finished = (error) => {
    if (error){
        console.log(error);
        return;

    }}
  

    fs.readFile('report.json',"utf-8",(err,data)=>{
        const idNumber=parseInt(id);
        const json=JSON.parse(data);
        json[idNumber]=Object.assign(json[idNumber],report);
        fs.writeFileSync('report.json',JSON.stringify(json),finished);
        return res.json({"success":json[idNumber]});
    })
}

//delete data from json
const deleteJson= async(req,res)=>{

    const finished = (error) => {
        if (error){
            console.log(error);
            return;
    
        }}
      
      const {id}=req.body;
      fs.readFile('report.json',"utf-8",(err,data)=>{
       const idNumber=parseInt(id);
       const json=JSON.parse(data);
       console.log(json[idNumber]);
       json.splice(idNumber,1);
       fs.writeFileSync('report.json',JSON.stringify(json),finished);

       if (!err){
        return res.json({"success":"delete successful"});
       }
              
      })
}

module.exports={editJson,deleteJson}