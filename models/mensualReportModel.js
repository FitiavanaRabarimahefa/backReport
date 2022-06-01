const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const mensualReportSchema = new Schema({
    
    BAAF:
        { 
             lieu:{
                type:String,
                required:true,
            },
            produit:{
                type:String,
                required:true
            },
             realisation:{
                type:Number,
                required:true
            },
            valeurCible:{
                type:Number,
                required:true
            },

            pourcentageRealisation:{
                type:Number,
                 required:true
            },
            date:{
                type:Date,
                default:Date.now
            }
        }
       
    

})
module.exports=mongoose.model('mensualReport',mensualReportSchema);