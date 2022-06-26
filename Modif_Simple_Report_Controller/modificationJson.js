const fs=require('fs');
const editJson= async (req,res)=>{
    
    const {id,faits,observations}=req.body;
    
    const report={
        "faits":faits,
        "observations":observations,
    };

   const finished = (error) => {
    if (error){
        console.log(error);
        return;
    }}
    fs.readFile('reportMensual.json',"utf-8",(err,data)=>{
        const idNumber=parseInt(id);
        const json=JSON.parse(data);
        json[idNumber-1]=Object.assign(json[idNumber-1],report);
        fs.writeFileSync('reportMensual.json',JSON.stringify(json),finished);
        return res.json({"success":json[idNumber-1]});
    })
}
module.exports={editJson}