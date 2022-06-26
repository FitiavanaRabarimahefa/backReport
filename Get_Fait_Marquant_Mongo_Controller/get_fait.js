const faitModel = require('../models/reportActivityModel');

const getFaitData = async (req, res) => {
    const getAll = await faitModel.find();
    if (getAll) return res.json({ 'success': getAll });
}
module.exports={getFaitData}