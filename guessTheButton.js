<script>
  function checkWinner(clicked) {
    var winner = Math.floor(Math.random() * 3 + 1);
    var button = clicked;
    if (button == winner) {
      alert("CONGRATULATIONS, you guessed the lucky button !");
    } else {
      alert ("Sorry, the lucky button was Button " + winner);
    }
    
    return false;
  }
</script>
