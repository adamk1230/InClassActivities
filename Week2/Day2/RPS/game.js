     

      // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
      var options = ["r", "p", "s"];
      var wins = 0;
      var losses = 0;
      var ties = 0;

      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {

        // Determines which key was pressed
        var userGuess = event.key;

        // Alerts the key the user pressed (userGuess).
        // alert(userGuess);

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = options[Math.floor(Math.random() * options.length)];

        // Alerts the Computer's guess.
        // alert(computerGuess);


           if (userGuess === computerGuess){
        ties++;
      }

      else if (userGuess == "r" && computerGuess == "s") {wins++;}
      else if (userGuess == "s" && computerGuess == "p") {wins++;}
      else if (userGuess == "p" && computerGuess == "r") {wins++;}
      else {losses++;}

      console.log(wins);
      console.log(losses);
      console.log(ties);

      var updateWins = "<p>Wins: " + wins + "</p>";
      var updateLosses = "<p>Losses: " + losses + "</p>";
      var updateTies = "<p>Ties: " + ties + "</p>";

      var gameDiv = document.getElementById('game')
      gameDiv.innerHTML = updateWins + updateLosses + updateTies

      };
