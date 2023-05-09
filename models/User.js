const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 띄어쓰기 제거
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: { //유효성 관리
        type: String
    },
    tokenExp: { //토큰 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema); // User라는 이름으로 userSchema를 User라는 변수에 담음

module.exports = {User}; // 만든 스키마 내보내기