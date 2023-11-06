<<<<<<< HEAD
import express from "express";
import connect from "./schemas/index.js";
import router from "./routes/products.router.js";

const app = express();
const port = 3000;

=======
const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require("./routes/products.router.js")

const connect = require("./schemas");
>>>>>>> b87adf129e9d687b27074fbfe92eca011834fa1b
connect();

app.use(express.json());

<<<<<<< HEAD
app.use("/api", router);
=======
app.use("/api", goodsRouter);
>>>>>>> b87adf129e9d687b27074fbfe92eca011834fa1b

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});