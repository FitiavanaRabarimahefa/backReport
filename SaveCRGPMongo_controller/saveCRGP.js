const crgpModel = require('../models/crgpModel');

const saveCRGP = async (req, res) => {
        const {
        nom_rapport,
        numero,
        mois,
        cirfinValue,
        region,
        lieu,
        ordreJour, 
        observation,
        participant,
        evaluation
        
        
    } = req.body;

    console.log(req.body);

     try{
        const newCRGP= await crgpModel.create({
               
             nom_rapport,
             numero,
             mois,
             cirfinValue,
            region,
            lieu,
            ordreJour,
            observation,
            participant,
            evaluation
             
      })
        console.log(req.body);
        return res.status(200).json({newCRGP});
        
    }catch(error){
        return res.status(404).json({'erreur':error.message});
    }
    
}
module.exports={saveCRGP}