const registerModel = require('../models/registerModel');

const deleteUser = async (req, res) => {
    const { id } = req.body;
    console.log(id);
    try {
        const search_user = await registerModel.findOne({ "IM":id});
        if (search_user) {
            const id_to_delete = search_user._id.toString();
            const apply_delete = await registerModel.findByIdAndDelete(id_to_delete);
            if (apply_delete) return res.json({"success":"Suppression avec succés"})
        }
        
    } catch(error) {
        return res.json({ "error": err });
    }
}

module.exports={deleteUser}