const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://diklrd92:1234@cluster0.ioarg4q.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
// 몽고db 계정 diklrd92@naver.com/ qmfhzhffl12!
// 몽고db 유저 diklrd92/1234


app.get('/', (req,res) => res.send("Hello World"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));