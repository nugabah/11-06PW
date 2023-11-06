import express from 'express';
import { createProduct } from '../CRUD_modules/create.js';
import { readAllProducts, readDetailProduct } from '../CRUD_modules/read.js';
import { updateProduct } from '../CRUD_modules/update.js';
import { deleteProduct } from '../CRUD_modules/delete.js';
const router = express.Router();

//상품 등록
router.post('/products', createProduct);

//상품 목록 조회
router.get('/products', readAllProducts);

//상품 개별 조회
router.get('/product/:productId', readDetailProduct);

//상품 정보 수정
router.put('/product/:productId', updateProduct);

//상품 삭제
router.delete('/product/:productId', deleteProduct);

export default router;
