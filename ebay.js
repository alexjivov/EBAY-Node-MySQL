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
    database: "productsDB"
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
    console.log(response); 
    if (response.bid === "BID") {
    displayInfo(); 
     } else { 
        console.log("We dont have this function yet... stay tuned")
     }

})


function displayInfo() {
    console.log("DISPLAYING INFO\n")
    var query = connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw (err) 
        for (var i = 0; i < res.length; i++) 
        { 
            console.log("CURRENT ITEM: " + res[i].name + " CURRENT NAME: " + res[i].current_bid); 
        }
    });

}; 

