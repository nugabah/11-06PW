<<<<<<< HEAD
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const id = process.env.mongodb_ID;
const pw = process.env.mongodb_PW;
const connect = () => {
    // mongoose.connect는 MongoDB 서버에 연결하는 메서드입니다.
    mongoose
        .connect(
            // 빨간색으로 표시된 부분은 대여한 ID, Password, 주소에 맞게끔 수정해주세요!
            `mongodb+srv://${id}:${pw}@nugaba.ixjsdg0.mongodb.net/?retryWrites=true&w=majority`,
            {
                dbName: 'JustMall', // node_lv1 데이터베이스명을 사용합니다.
            },
        )
        .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
        .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on('error', (err) => {
    console.error('MongoDB 연결 에러', err);
});

export default connect;
=======
const mongoose = require("mongoose");

const connect = () => {
    mongoose
        .connect("mongodb://localhost:27017/mongo_pr")
        .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
    console.error("MongoDB 연결 에러", err);
});

module.exports = connect;
>>>>>>> b87adf129e9d687b27074fbfe92eca011834fa1b
