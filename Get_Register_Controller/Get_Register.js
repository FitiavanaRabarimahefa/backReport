const registerModel=require('../models/registerModel');

const getRegisterList=async(req,res)=>{

    try{
         const getList= await registerModel.find({"Validation":false}).exec();
         if(!getList)return res.json({"message":"pas d'invitation"});
         return res.json({getList});
            
        }catch(error){
              return res.json({"error":error.message});
    }

}
module.exports={getRegisterList}