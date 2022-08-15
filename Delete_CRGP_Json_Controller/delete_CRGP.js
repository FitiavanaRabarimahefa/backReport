const fs = require('fs');

const deleteCRGPJson = (req, res) => {

     const {id} = req.body;

    const finished = (error) => {
        if (error){
            console.log(error);
            return;
    
        }}
      
   
    
    fs.readFile('CRGP.json', "utf-8", (err, data) => {
         
            const idNumber=parseInt(id);
            const json=JSON.parse(data);
            delete json[idNumber-1];
                
            fs.writeFileSync('CRGP.json',JSON.stringify(json),finished);

            if (!err){
                return res.json({"success":"delete successful"});
            }
              
      })
}
module.exports = { deleteCRGPJson }