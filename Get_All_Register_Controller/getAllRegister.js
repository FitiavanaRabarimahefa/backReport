const registerModel = require('../models/registerModel');

const getAllRegister = async (req, res) => {
     try{
         const getList= await registerModel.find({"Validation":true,"SuperAdmin":false}).exec();
         console.log(getList);
         if(getList.length==0){
            return res.json({"error":"il n'y a pas d'utilisateur"});
        }else{
            return res.json({"success":getList});
            
        };
            
        }catch(error){
              return res.json({"error":error.message});
    }
}
module.exports={getAllRegister}