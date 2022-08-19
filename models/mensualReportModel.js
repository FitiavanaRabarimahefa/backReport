const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const mensualReportSchema = new Schema({
    
            nom_rapport:{
                type:String,
                required:true,
            },
            numero: {
                type: String,
                required:true
           },
            
           mois: {
                type: String,
                required:true
            },
            cirfinValue: {
                type: String,
                required:false
            },
            region:{
                type:String,
                required:true,
            },
            produit:{
                type:String,
                required:true
            },
             realisation:{
                type:String,
                required:false
            },
            valeurCible:{
                type:String,
                required:false
            },

            pourcentageRealisation:{
                type:String,
                 required:true
            },
            date:{
                type:Date,
                default:Date.now
            }
})
module.exports=mongoose.model('mensualReport',mensualReportSchema);