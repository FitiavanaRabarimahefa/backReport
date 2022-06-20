const registerModel=require('../models/registerModel');

const getRegisterList=async(req,res)=>{

    try{
         const getList= await registerModel.find({"Validation":false}).exec();
         console.log(getList);
         if(getList.length==0){
            return res.json({"message":"pas d'invitation"});
        }else{
            return res.json({"data":getList});
            
        };
            
        }catch(error){
              return res.json({"error":error.message});
    }

}
module.exports={getRegisterList}