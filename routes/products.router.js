const express = require("express");

const router = express.Router();

const Goods = require("../schemas/products.schema.js");

router.get("/", (req, res) => {
    res.send("default url for goods.js GET Method");
});

// localhost:3000/api/about GET
router.get("/about", (req, res) => {
    res.send("goods.js about PATH");
});

//상품 목록 조회 API
router.get("/goods", (req, res) => {
	res.json({Goods});
});

router.post("/goods", async (req, res) => {
    const { goodsId, name, thumbnailUrl, category, price } = req.body;

    const goods = await Goods.find({ goodsId });
    if (goods.length) {
        return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
    }

    const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

    res.json({ goods: createdGoods });
});

module.exports = router;