const bcrypt = require("bcrypt")
const UserRegister = require ("../models/registerModel");

const registration = async  (req,res) => {
    const {IM,Mail,Region,Password}=req.body;
      
     //console.log(req.body);


     if(IM =='' || Password =='') return res.json({'error':'void value'})
     
          const duplicate = await UserRegister.findOne({IM}).exec();
          //console.log(duplicate);
          if(duplicate) return  res.json({'errorDuplicate':'user dupicate'}) 
          
          try{
              const hashPassword =  await bcrypt.hash(Password,10);

              const newUser = await UserRegister.create({
               "IM":IM,
               "Mail":Mail,
               "Region":Region,
               "Password":hashPassword,
              }) 
                   
              console.log(newUser);
               res.json({'succes': `user created ${IM}`})
              
          }catch(err){
               console.log(err.message);
               res.json({'error': err})
          }
     
     
}

module.exports = {registration} ; 