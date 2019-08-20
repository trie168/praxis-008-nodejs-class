const express = require("express");
const router = express.Router();
const create = require("../actions/users/create.action");
const getAll = require("../actions/users/getAll.action");
const getDetail = require("../actions/users/getDetail.action");
const update = require("../actions/users/update.action");
const destroy = require("../actions/users/delete.action");
const { check, validationResult, body } = require("express-validator");
const jwt = require("jsonwebtoken");

router.post(
    "/",
    [
        check("name")
            .not()
            .isEmpty(),
        check("email")
            .not()
            .isEmpty(),
        check("password")
            .not()
            .isEmpty()
            .isLength({ min: 8 }),
        check("password_confirmation")
            .not()
            .isEmpty(),
        body("password_confirmation").custom((value, { req }) => {
            if (value != req.body.password) {
                throw new Error("Password confirmation does not match");
            } else {
                return true;
            }
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                status: "error",
                message: errors.array()
            });
        }

        try {
            let data = await create(req);

            return res.status(200).json({
                status: "success",
                data,
                message: "User created successfully!"
            });
        } catch (err) {
            return res.status(400).json({
                status: "error",
                message: err.message
            });
        }
    }
);
router.get("/", async (req, res) => {
    try {
        let data = await getAll();

        return res.send({
            status: "success",
            data,
            message: "Get all user data"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.get("/my-profile", async (req, res) => {
    try {
        let user_token = req.header("Authorization");
        let user_data = await jwt.verify(user_token, process.env.JWT_SECRET);
        console.log(`User data from token ${JSON.stringify(user_data)}`);

        let data = await getDetail(user_data.user_id);

        return res.status(200).json({
            status: "success",
            data,
            message: "User login data"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let data = await getDetail(id);

        return res.status(200).json({
            status: "success",
            data,
            message: "Get user detail successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.put("/:id", async (req, res) => {
    let { id } = req.params;
    let updated_data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        fresh: req.body.fresh
    };

    try {
        let data = await update(id, updated_data);

        return res.status(200).json({
            status: "success",
            data,
            message: "User data updated successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params;

    try {
        let data = await destroy(id);

        return res.status(200).json({
            status: "success",
            data,
            message: "User data deleted successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

module.exports = router;
