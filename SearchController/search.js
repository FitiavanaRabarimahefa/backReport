const searchReport = require("../models/mensualReportModel");

const search = async (req,res)=>{

    const {lieu} = req.body;
     try{
         const result = await searchReport.find({"BAAF.lieu":lieu}).exec();
         if(result) return res.json({'resultat':result});
     }catch(error){
         return res.status(404).json({'erreur':error.message})
     };
}
module.exports={search}
