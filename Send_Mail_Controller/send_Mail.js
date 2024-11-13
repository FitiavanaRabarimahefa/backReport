const nodemailer=require("nodemailer");
const updateRegister=require('../models/registerModel');

const sendMail=async(req,res)=>{

    const { mail } = req.body;
    console.log(mail);

    const transporter=nodemailer.createTransport({
        service:"hotmail",
        auth:{
            user:"fitiavana.rabary@gmail.com",
            pass:"fitiavana123"
        }
    });
     const option={
        from:"",
        to:,
        subject:"Validation de compte ",
        text:'Bonjour à vous ! Votre compte a éte validé ,vous pouvez vous connecter maintenant'
    }
     const validate_Send_Mail=await transporter.sendMail(option);
    if(validate_Send_Mail) {
        try{
        const Data_To_update= await updateRegister.findOne({"Mail":mail}).exec();
         if(Data_To_update){
             const id_Data=Data_To_update._id.toString();
             console.log(id_Data);
             const validate_Update= await updateRegister.findByIdAndUpdate(id_Data,{Validation:true});
             if(validate_Update) return res.json({"success":" Succes de la mise à jour "})
        };
     }catch(error){
          console.log(error);
    }
    }
}

const sendAdminMail = async (req, res) => {
    const { mail } = req.body;
    console.log(mail);

    const transporter=nodemailer.createTransport({
        service:"hotmail",
        auth:{
            user:"fitiavana.rabary@gmail.com",
            pass:"fitiavana123"
        }
    });
     const option={
        from:"fitiavana.rabary@gmail.com",
        to:mail,
        subject:"Validation de compte ",
        text:'Bonjour à vous ! Votre compte a éte validé ,vous pouvez vous connecter maintenant'
    }
     const validate_Send_Mail=await transporter.sendMail(option);
    if(validate_Send_Mail) {
        try{
        const Data_To_update= await updateRegister.findOne({"Mail":mail}).exec();
         if(Data_To_update){
             const id_Data=Data_To_update._id.toString();
             console.log(id_Data);
             const validate_Update= await updateRegister.findByIdAndUpdate(id_Data,{Validation:true,AdminStatus:true});
             if(validate_Update) return res.json({"success":" Succes de la mise à jour "})
        };
     }catch(error){
          console.log(error);
    }
    }
    
}
module.exports={sendMail,sendAdminMail}
