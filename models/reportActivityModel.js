const mongoose = require("mongoose");
const Schema = mongoose.Schema

const reportActivitySchema = new Schema({
    
            nom_rapport:{
                type:String,
                required:true,
             },
            numero: {
                type: Number,
                required:true
            },
            mois: {
              type: String,
              required:true  
            },
            region:{
                type:String,
               required: true,
            },
            cirfinValue: {
                type: String,
                required:false
            },
            
            faits:{
                type:String,
                required:true
            },
            observations:{
                type:String,
                required:true
            },
             date:{
                type:Date,
                default:Date.now
            }
})
module.exports=mongoose.model('reportActivity',reportActivitySchema)