const User = require("../../models/user.model");

const getAll = async () => {
    try {
        let query = await User.find({}).exec();
        let data = query.map((v, i) => {
            return {
                name: v.name,
                email: v.email,
                phone: v.phone,
                password: v.password
            };
        });

        return data;
    } catch (err) {
        throw err;
    }
};

module.exports = getAll;
