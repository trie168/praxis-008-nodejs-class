const verifyToken = require("../middlewares/verify_token.middleware");
const users = require("./user.route");
const vehicles = require("./vehicle.route");
const shops = require("./shop.route");
const auth = require("./auth.route");
const email = require("./email.route");
const reset = require("./resetPassword.route");

const routes = app => {
    app.use("/book", vehicles);
    app.use("/shop", verifyToken(), shops);
    app.use("/user", users);
    app.use("/auth", auth);
    app.use("/email", email);
    app.use("/reset", reset);
};

module.exports = routes;
