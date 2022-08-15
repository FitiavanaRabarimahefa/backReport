const fs = require('fs');

const deleteFormation = async (req, res) => {

    const { id } = req.body;
    const finished = (error) => {
        if (error) {
            console.log(error);
            return
        }
    }

    fs.readFile('formation.json', "utf-8", (err, data) => {
        const idNumber = id;
        const json = JSON.parse(data);
        delete json[idNumber - 1];
        
        fs.writeFileSync('formation.json', JSON.stringify(json), finished)
        
        if(!err) return res.json({"success":"delete successful"})
    })
}
module.exports={deleteFormation}