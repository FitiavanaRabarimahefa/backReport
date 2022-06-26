const reportActivityModel = require('../models/reportActivityModel');

const Save_Report_Activity= async(req,res)=>{

    const {
        nom_rapport,
        numero,
        mois,
        cirfinValue,
        region,
        faits,
        observations
    } = req.body;

    console.log(req.body);

     try{
        const newReportActivity= await reportActivityModel.create({
               
             nom_rapport,
             numero,
             mois,
             cirfinValue,
             region,
             faits,
             observations,
      })
        console.log(req.body);
        return res.status(200).json({newReportActivity});
        
    }catch(error){
        return res.status(404).json({'erreur':error.message});
    }
}
module.exports={Save_Report_Activity}