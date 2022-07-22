const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formationSchema = new Schema({
    
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
            lieu: {
               type: String,
             required:true,
            },
             debut: {
                type: String,
                required:true,
            },
            fin: {
                type: String,
                required:true,
            },
            theme: {
                type: String,
                required:true,
            },
             sousTheme: {
                 type: String,
                 required:true,
            },
            objectif: {
                type: String,
               required:true, 
            },
            participant: {
                type: Array,
                required:true
            },
            formateur: {
                type: Array,
                required:true
            },
            observation: {
               type: String,
               required:true,
            }
});
module.exports=mongoose.model('formation',formationSchema)