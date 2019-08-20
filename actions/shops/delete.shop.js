const deleteShop = require("../../models/shop.model");

const destroy = async id => {
    try {
        let query = await deleteShop
            .findOneAndDelete({
                _id: id
            })
            .exec();

        return query;
    } catch (err) {
        throw err;
    }
};

module.exports = destroy;
