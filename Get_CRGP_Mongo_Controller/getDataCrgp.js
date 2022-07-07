const crgpModel = require('../models/crgpModel');

const getCRGPMongo = async (req, res) => {
    const getData = await crgpModel.find();
     console.log(getData);
    if (getData) return res.json({"success": getData })
}
module.exports = { getCRGPMongo };