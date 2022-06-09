const bcrypt = require("bcrypt")
const UserRegister = require ("../models/registerModel");

const registration = async  (req,res) => {
    const {IM,Mail,Region,Password}=req.body;
      
     //console.log(req.body);


     if(IM =='' || Password =='') return res.json({'error':'Votre champs est vide'})
     
          const duplicate = await UserRegister.findOne({IM}).exec();
          //console.log(duplicate);
          if(duplicate) return  res.json({'error':'identifiant dupliqué dans la base de donnée'}) 
          
          try{
              const hashPassword =  await bcrypt.hash(Password,10);

              const newUser = await UserRegister.create({
               "IM":IM,
               "Mail":Mail,
               "Region":Region,
               "Password":hashPassword,
              }) 
                   
              console.log(newUser);
               res.json({'success': 'Inscription avec succès'})
              
          }catch(err){
               console.log(err.message);
               res.json({'error': err})
          }
     
     
}

module.exports = {registration} ; 