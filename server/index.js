const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));


const users= [
  {
  idx : 1,
  id: "test",
  pw: "1234",
  created: new Date("2024-07-20"),
  email:"test@naver.com",
  nick: "겁나 무서운 전사"
},
{
  idx : 2,
  id: "hello",
  pw: "hello1234",
  created: new Date("2024-07-22"),
  email:"helloworld@naver.com",
  nick: "헬로월드"
}
];



app.get('/', function (req, res) {
  res.sendFile (__dirname + "/public/home.html");
});
app.get('/main', function (req, res) {
  res.sendFile (__dirname + "/public/main.html");
});

app.post('/login', function(req, res) {
  let {user_id, user_pw} = req.body;
  
  let foundUser = users.filter(user => user.id == user_id && user.pw == user_pw);

  console.log(foundUser)


  if(user_id== "test" && user_pw=="1234"){
    res.json({
    message: "login ok",
    status: 200,
    isLogin: true,
    user: foundUser.nick,
    redirect_url : "/home"
  });
}  else {
  res.json({
    message: "login fail",
    status: 400,
    isLogin: false,
    user: null,
    redirect_url: null
  });
}
})
app.get('/chart', function(req, res) {
  res.json([
    {
      ranking:1,
      title: '데드풀과 울버린',
      satisfy: 99,
      ratio: 44.4,
      img: ['images/poster1.jpg','images/poster2.jpg'] ,
      url: '/movie?cate=action&sf?code={ranking}'
    },
    {
      ranking:2,
      title:'파일럿',
      satisfy: 99,
      ratio: 15.7,
      url: '/movie?cate=action&sf?code={ranking}'
    },
  ])
})
 // req: request[요청]
 // res: response[응답]
app.post('/contact', function (req, res) {
      console.log(req.body);
    res.sendFile (__dirname + "/public/contact.html");
});

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
});