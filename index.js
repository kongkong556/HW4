var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//app.set('num', 1);
//var num = app.get('num');
//console.log(num);	//1

app.use(function (req, res, next) {
    console.log('Record	timestamp');
    next();
});

app.use(bodyParser.json());

app.post('/calculator/rest/squareroot', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var object = {
      "x" : x,
      "y" : y,
      "result square root x": Math.sqrt(x),
      "result square root y": Math.sqrt(y)
    }
    res.json(object);
});

app.post('/calculator/rest/cmtoinch', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var object = {
      "x" : x,
      "y" : y,
      "result cm to inch x": x * 0.39370079,
      "result cm to inch y": y * 0.39370079
    }
    res.json(object);
});

app.post('/calculator/rest/kbtotb', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var object = {
      "x" : x,
      "y" : y,
      "result kb to tb x": x * Math.pow(10,-9),
      "result kb to tb y": y * Math.pow(10,-9)
    }
    res.json(object);
});

app.listen(3000,function(){
  console.log("server start at port 3000");;
});
