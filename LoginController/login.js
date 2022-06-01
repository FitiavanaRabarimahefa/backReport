const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const UserLogin = require("../models/registerModel");

const privateKey='portyuiyghjv14lkjhyfbndwsqerrt';

const login = async (req,res) => {
      
 const {IM,password}=req.body

    if(IM == '' || password =='') return res.json('Votre champ est vide');
    try{
        const getUser = await UserLogin.findOne({IM}).exec();
        const data = getUser.Password
        if (getUser) {
            verification = await bcrypt.compare(password,data);
             if(!verification){
                return res.json('Ereur authentification Mot de passe invalide');
             }else{
                 const token=jwt.sign(
                     {IM},
                     privateKey,
                     {algorithm:"HS256"}
                 )
                return res.json({'token':token});
             } 
            
        }  
        

     
       
    }catch(error){
        console.log(error);
        return res.json({'erreur':'utilisateur introuvable'});
    }


}
module.exports={login};