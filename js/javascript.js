function navigate() {
  var link = "https://pkmnshuffle.fandom.com/wiki/";
  var pkm_id = document.getElementById("pokemon").value;
  window.open(link + pkm_id, "_blank");
}
/*
document.getElementById("pokemon").addEventListener("keydown", inputCharacters);

function inputCharacters(event) {
  if (event.keyCode == 13) {
    navigate();
  }
}
*/
