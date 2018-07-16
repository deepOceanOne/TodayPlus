var express = require('express')
, cors = require('cors')
, app = express();
var url = require('url')

app.use(cors());

// 棋子的位置,注意随时更新
var x = 0;
var y = 0;

app.get('/get',function(req,res){ 

  var cor = {"x":x,"y":y};
  console.log(cor.x);
  console.log(cor.y);
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  res.json(cor);
});

app.get('/put',function(req,res){
  // var query = url.parse(req.url).query;
  console.log('get a update ')
  var _x = req.param('x');
  var _y = req.param('y');
  x = _x;
  y = _y;
});

app.listen('1337');