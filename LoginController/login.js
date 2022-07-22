const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const UserLogin = require("../models/registerModel");

const privateKey='portyuiyghjv14lkjhyfbndwsqerrt';

const login = async (req,res) => {
      
 const {IM,password}=req.body

    if(IM == '' || password =='') return res.json({'error':'Votre champ est vide'});
    try{
        const getUser = await UserLogin.findOne({IM}).exec();
        const data = getUser.Password
        if (getUser) {
            verification = await bcrypt.compare(password,data);
             if(!verification){
                return res.json({'error':'Ereur authentification Mot de passe invalide'});
             }else{
                 const token=jwt.sign(
                     {IM},
                     privateKey,
                     {algorithm:"HS256"}
                 )
                return res.json({
                     "success":"Succes de votre authentification",
                     "validation": getUser.Validation,
                     "adminStatus":getUser.AdminStatus,
                     "token":token,
                     "Region":getUser.Region
                });
             } 
        }  
    }catch(error){
        console.log(error);
        return res.json({'error':'utilisateur introuvable'});
    }
}
module.exports={login};