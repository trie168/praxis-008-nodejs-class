const Shop = require("../../models/shop.model");

const update = async (id, updated_data) => {
    let { name, description, owner, fresh } = updated_data;
    let opts = {
        new: fresh === "true" ? true : false
    };
    let data = {
        name,
        description,
        owner
    };

    try {
        let query = await Shop.findOneAndUpdate(
            {
                _id: id
            },
            data,
            opts
        ).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

module.exports = update;
