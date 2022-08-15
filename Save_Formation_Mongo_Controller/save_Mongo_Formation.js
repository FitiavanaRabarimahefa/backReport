const formationModel = require('../models/formationModel');

const saveFormation = async (req, res) => {
      const {
        nom_rapport,
        numero,
        mois,
        cirfinValue,
        region,
        debut,
        fin,
        lieu,
        theme,
        sousTheme,
        objectif,
        formateur,
        participant,
        observation,
    } = req.body;

    console.log(req.body);

     try{
        const newFormation= await formationModel.create({
            nom_rapport,
            numero,
            mois,
            cirfinValue,
            region,
            debut,
            fin,
            lieu,
            theme,
            sousTheme,
            objectif,
            formateur,
            participant,
            observation,
        })
        console.log(req.body);
         return res.status(200).json({
             "success":"insertion successful",
             newFormation
         });
        
    }catch(error){
        return res.status(404).json({'erreur':error.message});
    }
    
}

module.exports={saveFormation}