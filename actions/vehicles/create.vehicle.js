const Vehicle = require("../../models/vehicle.model");
const { isInteger } = require("lodash");

const create = req => {
    let { merk, tipe, price, author } = req.body;
    price = parseInt(price);

    if (isInteger(price) === false) {
        return "Wrong type of `price`";
    }

    var insert_data = {
        merk,
        tipe,
        price,
        author
    };

    let data = new Vehicle(insert_data);
    data.save();

    return data;
};

module.exports = create;
