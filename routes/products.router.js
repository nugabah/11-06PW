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
	res.status(200).json({Products});
});

//상품 목록 생성
router.post("/products", async (req, res) => {
    const { title,content,author,password } = req.body;

    // const goods = await Products.find({ goodsId });
    // if (goods.length) {
    //     return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
    // }
    const status = "FOR_SALE";
    const createdGoods = await Products.create({ title,content,author,password,status });

    res.json({ products: createdGoods });
});

module.exports = router;