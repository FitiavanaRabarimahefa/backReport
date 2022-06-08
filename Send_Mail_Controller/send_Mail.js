const nodemailer=require("nodemailer");

const sendMail=async(req,res)=>{

    const {mail}=req.body;

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
        text:'Bonjour à vous votre compte a éte valider ,vous pouvez vous connectez maintenant'
    }
     const validate_Send_Mail=await transporter.sendMail(option);
    if(validate_Send_Mail) console.log(validate_Send_Mail.response);

}
module.exports={sendMail}