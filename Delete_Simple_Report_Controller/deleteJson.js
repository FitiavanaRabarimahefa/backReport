const fs=require('fs');
const deleteSimpleJson = async (req, res) => {

    const finished = (error) => {
        if (error){
            console.log(error);
            return;
    
        }}
      
    const { id } = req.body;
    
      fs.readFile('reportMensual.json',"utf-8",(err,data)=>{
       const idNumber=parseInt(id);
       const json=JSON.parse(data);
       const indexJson=json.indexOf(idNumber);
       console.log(indexJson);
      // json.splice((idNumber-1),1);
       delete json[idNumber-1];
       
       fs.writeFileSync('reportMensual.json',JSON.stringify(json),finished);

       if (!err){
        return res.json({"success":"delete successful"});
       }
              
      })
}
module.exports = { deleteSimpleJson }