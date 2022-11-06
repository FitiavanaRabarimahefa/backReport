const fs = require('fs');

const deleteJson = async (req, res) => {
  const { id } = req.body;
   tab = [];

     fs.readFile('report.json',"utf-8",(err,data)=>{
       //const idNumber=parseInt(id);
       json = JSON.parse(data);
       tab = json;
       //const indexJson = tab.indexOf(e=>e.id==id)
         //console.log(JSON.parse(data))
         return res.json({tab});
       // json.splice((idNumber-1),1);
      // delete json[idNumber-1];

         /* for (let i=idNumber+1; i <= json.length; i++){
              json[i]=i-1;
          }*/
       
    //    fs.writeFileSync('reportMensual.json',JSON.stringify(json),finished);

    //    if (!err){
    //     return res.json({"success":"delete successful"});
    //    }
              
      })
}
module.exports={deleteJson}