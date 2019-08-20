const User = require("../../models/user.model");

const getDetail = async id => {
    try {
        let query = await User.findOne({
            _id: id
        }).exec();

        return query;
    } catch (err) {
        throw err;
    }
};

module.exports = getDetail;
