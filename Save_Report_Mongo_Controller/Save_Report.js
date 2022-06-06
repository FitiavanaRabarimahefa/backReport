const mensualReportModel=require("../models/mensualReportModel");

const Save_Report= async(req,res)=>{

    const {
        //lieu,
        produit,
        realisation,
        valeurCible,
        pourcentageRealisation
    }=req.body

     try{
        const newReportMensual= await mensualReportModel.create({
            BAAF:
                { 
                //lieu,
                produit,
                realisation,
                valeurCible ,
                pourcentageRealisation,
                             
                }
               
            
        })
        console.log(req.body);
        return res.status(200).json({newReportMensual});
        
    }catch(error){
        return res.status(404).json({'erreur':error.message});
    }
}
module.exports={Save_Report};