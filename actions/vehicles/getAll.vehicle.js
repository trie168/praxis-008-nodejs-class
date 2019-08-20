const Vehicle = require("../../models/vehicle.model");
const User = require("../../models/user.model");

const getAll = async () => {
    let query = await Vehicle.find({})
        .populate([
            {
                path: "author",
                model: User
            }
        ])
        .exec();

    return query;
};

module.exports = getAll;
