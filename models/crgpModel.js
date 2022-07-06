const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crgpSchema = new Schema({

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
                required:false,
            },
            lieu: {
               type: String,
             required:true,
           },
            participant: {
                type: Array,
                required:true
            },
            ordreJour: {
                type: Array,
                required:true
            },
            observation: {
                type: String,
                required:true
            },
            evaluation: {
                type: Array,
                required:true
            },
            date: {
                type: Date,
                default:Date.now
            }
})
module.exports = mongoose.model('compteRendu', crgpSchema);