<!-- Option 2: Separate Popper and Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

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
</body>
</html>
