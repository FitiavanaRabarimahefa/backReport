const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    IM:{
        type:Number,
        required:true,
    },
    Password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Register',registerSchema);

