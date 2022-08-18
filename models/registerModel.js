const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const registerSchema = new Schema({
    IM:{
        type:Number,
        required:true,
    },
    Mail:{
         type:String,
         required:true,
    },
    Region:{
          type:String,
          required:true
    },
    Password:{
        type:String,
        required:true
    },
    Validation:{
        type:Boolean,
        default:false,
    },
    AdminStatus: {
        type: Boolean,
        default:false,
    },
    SuperAdmin: {
        type: Boolean,
        default:false
    }

})

var registerModel = mongoose.model('Register', registerSchema);

const IM = 999999;

const duplicate =registerModel.findOne({ IM }).exec();

if (!duplicate) {

      registerModel.create({
         "IM":IM,
         "Mail":'fitiavana.rabary@gmail.com',
         "Region":'Analamanga',
        "Password":1234,
        "Validation": true,
        "AdminStatus": false,
         "SuperAdmin":true,
    })

}

  

module.exports = mongoose.model('Register', registerSchema);



