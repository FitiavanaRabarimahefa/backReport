const mongoose = require('mongoose');
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
        default:false
    }

})
module.exports=mongoose.model('Register',registerSchema);

