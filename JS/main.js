const cargarPokemons = async () => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/");
    console.log(respuesta);
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};

cargarPokemons();
