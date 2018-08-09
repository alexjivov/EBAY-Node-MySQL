var inquirer  = require("inquirer"); 
var mysql = require("mysql"); 

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "unknownDBsoFar"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  
  });

inquirer.prompt([
    {
        type: "list",
        name: "bid",
        choices: ["BID", "POST"], 
        message: "Would you like to BID or POST an item?"
    }
]).then(function(response) {
    if (response === "BID") 
    //{run bid function }
    console.log("you did somethign right"); 

})


