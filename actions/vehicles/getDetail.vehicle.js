const Vehicle = require("../../models/vehicle.model");

const getDetail = async id => {
    try {
        let query = await Vehicle.findOne({
            _id: id
        }).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

module.exports = getDetail;
