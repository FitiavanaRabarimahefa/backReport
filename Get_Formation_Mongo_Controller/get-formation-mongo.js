const formationModel = require('../models/formationModel');

const getFormationMongo = async (req, res) => {
    const getData = await formationModel.find();
     console.log(getData);
    if (getData) return res.json({"success": getData })
}

module.exports={getFormationMongo}