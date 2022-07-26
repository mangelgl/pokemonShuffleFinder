function initElement() {
    var btn = document.getElementById("link");
    btn.onclick = navigate;
    alert('¡Bienvenido al buscador de Pokémon Shuffle!\n\nEn este buscador, simplemente escribe correctamente el pokémon que desees buscar y se mostrarán las estadísticas de él.\n\nEsta página redirecciona a la página oficial de Pokémon Shuffle y evita que tengas que buscar el pokemon en Google cada vez que quieras consultar sus estadísticas para saber cómo vencerlo.\n\nSi os gusta u os ha ayudado, no olvides en hacérmelo saber en alguna de mis redes sociales.');
}
function navigate(event) {
    var link = "https://pkmnshuffle.fandom.com/wiki/";
    var pkm_id = document.getElementById("pokemon_id").value;
    window.open(link + pkm_id, '_blank');

    
}