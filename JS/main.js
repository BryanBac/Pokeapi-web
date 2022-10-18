var posicion = 0;

function getRandomInt() {
  return Math.floor(Math.random() * 1153);
}
const cargarPokemons = async () => {
  try {
    const respuesta = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0/"
    );
    const datos = await respuesta.json();
    if (respuesta.status == 200) {
      pokedex = datos.results;
      var lista_pokemons = "";
      for (var i = 0; i < 6; i++) {
        valor = getRandomInt();
        imagen = await fetch(pokedex[valor].url);
        const datos2 = await imagen.json();
        img = datos2.sprites.front_default;
        lista_pokemons +=
          "<div id='pokemon'><img src='" +
          img +
          "' alt=''>" +
          "<h1>" +
          pokedex[valor].name +
          "</h1></div>";
      }

      document.getElementById("Lista_Pokemon").innerHTML = lista_pokemons;
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPokemons();
