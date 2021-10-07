var express = require('express');
var app = express();

var mysql = require('mysql');
var cors = require('cors');

app.use(cors());



/*SELECT name_of_the_dish, price, created_date, modified_date
FROM menu; 
*/

app.get('/menu', getMenu);

function getMenu(req, res){
  
    // Step 0: Setup the connection
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'utec',
        password : '1234567890',
        database : 'restaurant'
      });
  
    // Step 1: Open the connection
    connection.connect();
  
    // Step 2: Send the query
    const myQuery = " SELECT name_of_the_dish, price, created_date, modified_date " +
    "FROM menu; ";
  
    connection.query(myQuery, function (error, results, fields) {
      
      // Step 3: Process the result inside the callback
      
      res.send(results);
  
      // Step 4: Close the connection
      connection.end();
    });
  
  }

  app.listen(2077, function(){
      console.log("Server started in port 2077!!!")
  })
  