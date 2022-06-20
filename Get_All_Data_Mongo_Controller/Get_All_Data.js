const reportModel = require('../models/mensualReportModel');

const GetReportMongo = async (req, res) => {
    const getData = await reportModel.find();
    console.log(getData);
    if (getData) return res.json({"success": getData });
}
module.exports = { GetReportMongo }