import Products from "../schemas/products.schema.js";

export const createProduct = async (req, res) => {
    const { title, content, author, password } = req.body;
    if (!Object.keys(req.body).length)
        return res.status(400).json({ "errorMessage": '데이터 형식이 올바르지 않습니다.' });
    try {
        const status = "FOR_SALE";
        const createdAt = new Date();
        await Products.create({ title, content, author, password, status, createdAt });
        res.json({ "message": "판매 상품을 등록하였습니다." })
    } catch (err) {
        res.status(400).json({ "errorMessage": "데이터 형식이 올바르지 않습니다." })
    }
}