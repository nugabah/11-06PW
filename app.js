import express from 'express';
import connect from './schemas/index.js';
import router from './routes/products.router.js';

const app = express();
const port = 3000;

connect();

app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});
