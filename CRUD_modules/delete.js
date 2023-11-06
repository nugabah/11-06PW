import Products from "../schemas/products.schema.js";

export const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    const { password } = req.body;
    const correctPw = await Products.find({ _id: productId }).select("+password");
    if (!Object.keys(req.body).length)
        return res.status(400).json({ "errorMessage": '데이터 형식이 올바르지 않습니다.' });
    if (password !== correctPw[0].password)
        return res.status(401).json({ "Message": '상품을 삭제할 권한이 없습니다.' });
    try {
        await Products.deleteOne({ _id: productId });
        res.json({ "message": "상품 정보를 삭제하였습니다." });
    } catch (err) {
        res.status(404).json({ "errorMessage": "상품 삭제에 실패하였습니다." });
    }
}