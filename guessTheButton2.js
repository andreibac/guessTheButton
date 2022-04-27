<script>
  var myApp = {}; // Globally scoped object
  function createButtons() {
    myApp.buttons = document.getElementById("butoane").value; // get the number of buttons from the input
    var doc = document.createDocumentFragment();
    for(var i = 1; i <= myApp.buttons; ++i){
        var element = document.createElement("input");
        element.type  = "button";
        element.id = i;
        element.value = "Button " + i;
        element.setAttribute("onclick", "return winningButton(this.id);");
        doc.appendChild(element);
    }
    document.body.appendChild(doc);
    return false;
  }

  function winningButton(clicked) { 
    var winner = Math.floor(Math.random() * myApp.buttons + 1); // generate a random number between 1:n buttons
    var button = clicked;
    if (button == winner) {
      alert("CONGRATULATIONS, you guessed the lucky button !");
    } else {
      alert("Sorry, the lucky button was Button " + winner);
    }
    return false;
  }

</script>
