const User = require("../../models/user.model");

const destroy = async id => {
    try {
        let query = await User.findOneAndDelete({
            _id: id
        }).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

module.exports = destroy;
