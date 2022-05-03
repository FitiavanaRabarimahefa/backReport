const bcrypt = require("bcrypt")
const UserRegister = require ("../models/registerModel");

const registration = async  (req,res) => {
     var IM = req.body.matricule;
     var Password = req.body.mdp;
      
     //console.log(req.body);


     if(IM =='' || Password =='') return res.status(400).json({'error':'void value'})
     
          const duplicate = await UserRegister.findOne({IM}).exec();
          //console.log(duplicate);
          if(duplicate) return  res.status(409).json({'error':'user dupicate'}) 
          
          try{
              const hashPassword =  await bcrypt.hash(Password,10);

              const newUser = await UserRegister.create({
               "IM":IM,
               "Password":hashPassword,
              }) 
                   
              console.log(newUser);
               res.status(201).json({'succes': `user created ${IM}`})
              
          }catch(err){
               console.log(err.message);
               res.status(500).json({'error': err})
          }
     
     
}

module.exports = {registration} ; 