const Shop = require("../../models/shop.model");

const getAll = async () => {
    try {
        let query = await Shop.find({}).exec();
        let data = query.map((v, i) => {
            return {
                name: v.name,
                description: v.description,
                owner: v.owner
            };
        });

        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = getAll;
