const Vehicle = require("../../models/vehicle.model");

const update = async (id, updated_data) => {
    let { merk, tipe, price, fresh } = updated_data;
    let opts = {
        new: fresh === "true" ? true : false
    };
    let data = {
        merk,
        tipe,
        price
    };

    try {
        let query = await Vehicle.findOneAndUpdate(
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
