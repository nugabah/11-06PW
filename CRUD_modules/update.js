import Products from '../schemas/products.schema.js';

export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { title, content, password, status } = req.body;
  const correctPw = await Products.find({ _id: productId }).select('+password');
  if (!Object.keys(req.body).length) return res.status(400).json({ Message: '데이터 형식이 올바르지 않습니다.' });
  if (password !== correctPw[0].password) return res.status(401).json({ Message: '상품을 수정할 권한이 없습니다.' });
  try {
    const createdAt = new Date();
    await Products.updateOne({ _id: productId }, { title, content, status, createdAt });
    res.json({ message: '상품 정보를 수정하였습니다.' });
  } catch (err) {
    res.status(404).json({ Message: '상품 조회에 실패하였습니다.' });
  }
};
