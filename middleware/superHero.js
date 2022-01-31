const SH = require("../models/superHero");
    

module.exports = {
    createSH : async (req, res) => {
        let { name,gender,strenght,speed,intelligence } = req.body;
        try {
            const superhro = await SH.create({ name,gender,strenght,speed,intelligence  });
            res.status(201).json(superhro);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showSH : async (req, res) => {
        const id = req.params.id;
        try {
            const superhro = await SH.findById(id).select({_id : 0});
            res.json(superhro);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showAllSH: async (req, res) => {
        try {
            const quotes = await SH.find().select({_id : 0});
            res.json(quotes);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    editSH : async (req, res) => {
        const { name,gender,strenght,speed,intelligence } = req.body,
            id = req.params.id;
        try {
            const superhro = await SH.findById(id);
            superhro.name = name ? name : superhro.name;
            superhro.gender = gender ? gender : superhro.gender;
            superhro.strenght = strenght ? strenght : superhro.strenght;
            superhro.speed = speed ? speed : superhro.speed;
            superhro.intelligence = intelligence ? intelligence : superhro.intelligence;
            await superhro.save();
            res.status(201).send(superhro);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    deleteSH : async (req, res) => {
        try {
            const id = req.params.id,
                superhro = await SH.findById(id);
            await superhro.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
}