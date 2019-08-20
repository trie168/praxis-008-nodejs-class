const express = require("express");
const router = express.Router();
const create = require("../actions/vehicles/create.vehicle");
const getAll = require("../actions/vehicles/getAll.vehicle");
const destroy = require("../actions/vehicles/delete.vehicle");
const getDetail = require("../actions/vehicles/getDetail.vehicle");
const update = require("../actions/vehicles/update.vehicle");

const { isString } = require("lodash");

router.post("/", (req, res) => {
    let data = create(req);

    if (isString(data) === true) {
        return res.status(400).json({
            status: "error",
            message: data
        });
    }

    return res.status(200).json({
        status: "success",
        data,
        message: "vehicle created successfully!"
    });
});

router.get("/", async (req, res) => {
    let data = await getAll();

    return res.send({
        status: "success",
        data,
        message: "Get all vehicle data"
    });
});

router.delete("/:id", async (req, res) => {
    let { id } = req.params;

    try {
        let data = await destroy(id);

        return res.status(200).json({
            status: "success",
            data,
            message: "vehicle data deleted successfully!"
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
            message: "Get vehicle detail successfully!"
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
        merk: req.body.merk,
        tipe: req.body.tipe,
        price: req.body.price,
        fresh: req.body.fresh
    };

    try {
        let data = await update(id, updated_data);

        return res.status(200).json({
            status: "success",
            data,
            message: "vehicle data updated successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

module.exports = router;
