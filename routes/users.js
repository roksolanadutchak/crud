var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'password',
  database: 'users'
})

connection.connect(function(err){
    if(err){
      console.log('Database connection error');
    }else{
      console.log('Database connection successful');
    }
  });

router.get('/', function(req, res, next){
    connection.query('SELECT * FROM user_info', (err, result) => {
        if (err) throw err
        res.send(result)
    })
    connection.end()
});
router.post('/', function(req, res){
    connection.query(`INSERT INTO user_info (id, name, lastName) VALUES ('${req.body.id}', '${req.body.name}', '${req.body.lastName}')`, (err, result) => {
        if (err) throw err;
        console.log('new user created');
    })
    connection.end()
})
router.put('/:id', function(req, res){
  connection.query(`UPDATE user_info SET name="${req.body.name}", lastName="${req.body.lastName}" WHERE id ="${req.params.id}"`, (err, result) => {
    if (err) throw err
    console.log('record changed')
  })
})
router.delete('/:id', (req, res) => {
  connection.query(`DELETE FROM user_info WHERE id = "${req.params.id}"`, (err, res) => {
    if (err) throw err
    console.log(`record was deleted`);
  })
})
module.exports = router;
