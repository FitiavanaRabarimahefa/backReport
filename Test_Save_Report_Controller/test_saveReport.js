const mensualReportModel = require('../models/mensualReportModel');

const saveMongo = async (req, res) => {
    const tabReport = req.body;
    try {
        const SaveSuccessful = await mensualReportModel.insertMany(tabReport);
        if(SaveSuccessful) return res.json({SaveSuccessful})
        
    }catch(error) {
        console.log(error);
    }
}
module.export={saveMongo}