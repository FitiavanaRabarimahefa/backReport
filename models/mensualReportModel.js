const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const mensualReportSchema = new Schema({
    
    nom_rapport:{
                type:String,
                required:true,
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
                required:true
            },
            valeurCible:{
                type:String,
                required:true
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