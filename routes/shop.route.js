const express = require("express");
const router = express.Router();
const createShop = require("../actions/shops/create.shop");
const getDetail = require("../actions/shops/getDetail.shop");
const destroy = require("../actions/shops/delete.shop");
const getAll = require("../actions/shops/getAll.shop");
const update = require("../actions/shops/update.shop");

router.post("/", async (req, res, next) => {
    try {
        let data = await createShop.create(req);

        return res.status(201).json({
            status: "success",
            data,
            message: "Shop created successfully"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.get("/", async (req, res, next) => {
    try {
        let data = await createShop.all();

        return res.status(200).json({
            status: "success",
            data,
            message: "Get all shop data"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        let data = await new getDetail(id).exec();
        console.log(`Type of getDetail is ${typeof getDetail}`);

        return res.status(200).json({
            status: "success",
            data,
            message: "Get detail of shop"
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
            message: "Shop data deleted successfully!"
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
        description: req.body.description,
        owner: req.body.owner,
        fresh: req.body.fresh
    };

    try {
        let data = await update(id, updated_data);

        return res.status(200).json({
            status: "success",
            data,
            message: "Shop data updated successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
});

router.get("/", async (req, res) => {
    let data = await getAll();

    return res.send({
        status: "success",
        data,
        message: "Get all shop data"
    });
});

module.exports = router;
