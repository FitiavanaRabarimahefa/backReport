const registerModel = require('./registerModel');

const sendMongoAdmin = async (req, res) => {
    const insertAdmin = await registerModel.create({
         "IM":999999,
         "Mail":'fitiavana.rabary@gmail.com',
         "Region":'Analamanga',
        "Password": '1234',
        "Validation": true,
        "AdminStatus": true,
         "SuperAdmin":true,
    })
}

module.exports = { sendMongoAdmin }