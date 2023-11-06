import Products from "../schemas/products.schema.js";

export const readAllProducts = async (req, res) => {
    const result = await Products.find({}).sort({ createdAt: -1 });
    res.status(200).json({ "data": result });
}

export const readDetailProduct = async (req, res) => {
    const { productId } = req.params;
    if (!productId)
        res.status(400).json({ "errorMessage": "데이터 형식이 올바르지 않습니다." });
    try {
        const result = await Products.find({ _id: productId })
        res.status(200).json({ "data": result });
    } catch (err) {
        res.status(404).json({ "errorMessage": "상품 조회에 실패하였습니다." });
    }
}