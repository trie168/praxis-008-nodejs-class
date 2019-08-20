const User = require("../../models/user.model");

const create = async req => {
    let { name, email, phone } = req.body;
    phone = parseInt(phone);
    var insert_data = {
        name,
        email,
        phone
    };

    let data = new User(insert_data);

    try {
        await data.save();

        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = create;
