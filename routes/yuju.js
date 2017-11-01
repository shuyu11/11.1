var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection=mysql.createPool({
  url:'localhost',
  user:'root',
  password:'123456',
  database:'baobei'
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  connection.query("SELECT COUNT(*) FROM list ",function(err,rows,files){
    console.log(rows)
    res.send(rows)
  })
});


router.post('/oo', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  console.log(req.body)
  var d=(req.body.aa)-1;
  connection.query('SELECT * FROM list LIMIT '+d*2+',2',function(err,rows,files){
    console.log(rows)
    res.send(rows)
  })
});


router.get('/lp', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  console.log(req.body)
  var d=(req.body.aa)-1;
  connection.query('SELECT * FROM list LIMIT 0,2',function(err,rows,files){
    console.log(rows)
    res.send(rows)
  })
});



module.exports = router;