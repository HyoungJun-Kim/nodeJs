const express = require('express');
const app = express();
const port = 3000;
const {User} = require("./models/User");
const bodyParser = require('body-parser');
const config = require("./config/key");

//application/x-www-form-urlencoded << 요런 형식을 분석해서 가져올 수 있도록
app.use(bodyParser.urlencoded({extended: true}));
//application/json << json 형식을 분석해서 가져올 수 있도록ㄴ
app.use(bodyParser.json());

const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://diklrd92:1234@nonijuice.twzgw6o.mongodb.net/?retryWrites=true&w=majority', {
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
// 몽고db 계정 diklrd92@naver.com/ qmfhzhffl12!
// 몽고db 유저 diklrd92/1234


app.get('/', (req,res) => res.send("Hello World!!"));

app.post('/register', (req, res) => {
  //회원가입 시 필요한 정보들을 client에서 가져와 db에 넣어준다.

  const user = new User(req.body); // bodyParser가 있기때문에 request body를 이용 가능
  // user.save((err, userInfo) => {
  //   if(err) return res.json({success: false, err})
  //   return res.status(200).json({
  //     success: true
  //   })
  // })
  user.save().then(()=>{
    res.status(200).json({
        success:true
    })
}).catch((err)=>{
    return res.json({success:false,err})
});
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));