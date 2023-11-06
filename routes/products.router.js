<<<<<<< HEAD
import express from "express";
import { createProduct }from "../CRUD_modules/create.js";
import { readAllProducts, readDetailProduct } from "../CRUD_modules/read.js";
import { updateProduct } from "../CRUD_modules/update.js";
import { deleteProduct } from "../CRUD_modules/delete.js";
const router = express.Router();

//상품 등록
router.post("/products", createProduct);

//상품 목록 조회
router.get("/products", readAllProducts);

//상품 개별 조회
router.get("/product/:productId", readDetailProduct);

//상품 정보 수정
router.put("/product/:productId", updateProduct);

//상품 삭제
router.delete("/product/:productId", deleteProduct);

export default router;
=======
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

//상품 목록 조회
router.get("/products", async (req, res) => {
    const result = await Products.find({}).sort({ createdAt: -1 });
    res.status(200).json({ "data": result });
});

//상품 개별 조회
router.get("/product/:productId", async (req, res) => {
    const { productId } = req.params;
    if (!productId) {
        res.status(400).json({ "message" : "데이터 형식이 올바르지 않습니다." });
    }
    try {
        const result = await Products.findById(productId);
        res.status(200).json({ "data": result });
    } catch (err) {
        res.status(404).json({ "Message" : "상품 조회에 실패하였습니다." })
    }
});

//상품 등록
router.post("/products", async (req, res) => {
    const { title, content, author, password } = req.body;

    if (!Object.keys(req.body).length) {
        return res.status(400).json({ "errorMessage": '데이터 형식이 올바르지 않습니다.' });
    }
    try {
        const status = "FOR_SALE";
        const createdAt = new Date();
        await Products.create({ title, content, author, password, status, createdAt });
        res.json({ "message": "판매 상품을 등록하였습니다." })
    } catch (err) {
        res.status(400).json({ "errorMessage": "데이터 형식이 올바르지 않습니다." })
    }
});

module.exports = router;
>>>>>>> b87adf129e9d687b27074fbfe92eca011834fa1b
