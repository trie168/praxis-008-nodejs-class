const deleteVehicle = require("../../models/vehicle.model");

const destroy = async id => {
    try {
        let query = await deleteVehicle
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
