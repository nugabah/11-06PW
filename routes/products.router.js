const express = require("express");

const router = express.Router();

const Products = require("../schemas/products.schema.js");

router.get("/", (req, res) => {
    res.send("default url for goods.js GET Method");
});

// localhost:3000/api/about GET
router.get("/about", (req, res) => {
    res.send("goods.js about PATH");
});

//상품 목록 조회 API
router.get("/products", (req, res) => {
    res.status(200).json({ Products });
});

//상품 목록 생성
router.post("/products", async (req, res) => {
    const { title, content, author, password } = req.body;

    // const goods = await Products.find({ goodsId });
    if (!Object.keys(req.body).length) {
        return res.status(400).json({ "errorMessage" : '데이터 형식이 올바르지 않습니다.' });
    }
    try {
        const status = "FOR_SALE";
        await Products.create({ title, content, author, password, status });
        res.json({ "message" : "판매 상품을 등록하였습니다." })
    } catch (err) {
        res.status(400).json({ "errorMessage" : "데이터 형식이 올바르지 않습니다." })
    }
});

module.exports = router;