var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "musicDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  insertCrud();

  


});

function allSongs(){

  connection.query("SELECT * FROM music", function(err, res) {
      if (err) throw err;
        console.log("All Songs:");
      for (var i = 0; i < res.length; i++) {
        console.log(res[i]);
      }

      
  });

}

function selectGenre() { 

  connection.query("SELECT * FROM music WHERE genre =? and artist =?", ["Rock", "Weezer"], function(err, res) {
    if (err) throw err;
    console.log("Rock Songs:");
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }

    connection.destroy();
    });

}





function insertCrud() {
  console.log("Inserting a new song...\n");
  connection.query(
    "INSERT INTO music SET ?",
    {
      title: "Poker Face",
      artist: "Lady Gaga",
      genre: "Pop"
    },
    function(err, res) {
      if(err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateCrud AFTER the INSERT completes
      updateCrud();
    }
  );
}

function updateCrud() {
  console.log("Weezer to pop rock\n");
  
  connection.query(
    "UPDATE music SET ? WHERE ?",
    [
      {
        genre: "Pop Rock"
      },
      {
        artist: "Weezer"
      }
    ],
    function(err, res) {

      console.log(res.affectedRows + " products updated!\n");
      // Call deleteCrud AFTER the UPDATE completes
      deleteCrud();
    }
  );
}

function deleteCrud() {
  console.log("RHCP...\n");
  connection.query(
    "DELETE FROM music WHERE ?",
    {
      artist: "RHCP"
    },
    function(err, res) {
      console.log(res.affectedRows + " products deleted!\n");
      // Call selectCrud AFTER the DELETE completes
      selectAllCrud();
    }
  );
}

function selectAllCrud() {
  console.log("Selecting all music...\n");
  connection.query("SELECT * FROM music", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
  });
}




