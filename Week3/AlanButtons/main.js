// Press "a" on the key board & open your console!
$(document).ready(function(){
  // run code everytime the key "a" is pressed
  document.onkeyup = function(e){
    if (e.key == 'a') {
      var selected = $('input[type=radio]:checked'); // THIS IS THE MONEY
      $.each(selected, function(){
        console.log(this)
        console.log(this.value)
      })
    }
  }
})
