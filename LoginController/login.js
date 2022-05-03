const bcrypt=require("bcrypt");
const UserLogin = require("../models/registerModel");

const login = async (req,res) => {
      
    var IM=req.body.numMatricule;
    var password=req.body.Mdp;

    if(IM == '' || password =='') return res.status(400).json({'error':'Votre champ est vide'});
    try{
        const getUser = await UserLogin.findOne({IM}).exec();
        const data = getUser.Password
        if (getUser) {
            verification = await bcrypt.compare(password,data);
             if(!verification) return res.json({'succes':'Ereur authentification'});
             return res.json({'erreur':'Valide authentification'});
        } 

     
       
    }catch(error){
         return res.json({'error':error.message});
    }


}
module.exports={login};