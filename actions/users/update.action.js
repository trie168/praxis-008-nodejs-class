const User = require("../../models/user.model");

const update = async (id, updated_data) => {
    let { name, email, phone, fresh } = updated_data;
    let opts = {
        new: fresh === "true" ? true : false
    };
    let data = {
        name,
        email,
        phone
    };

    try {
        let query = await User.findOneAndUpdate(
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
