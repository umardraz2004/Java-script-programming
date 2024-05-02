const input = document.getElementById('myInput');
const fetchData = document.getElementById('fetchData');
const pokemonImage = document.getElementById('pokeImg');

fetchData.addEventListener('click',getPokemon);

async function getPokemon() {
    const pokemon = input.value.toLowerCase();
    try {
        if(!isNaN(pokemon)) {
            throw new Error("Enter pokemon name!");
        } else {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            if(!response.ok) {
                throw new Error("Pokemon not found boy!");
            }
            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
            pokemonImage.src = pokemonSprite;
            pokemonImage.style.display = "block";
            input.value = ""
        }

    } catch (error) {
        console.error(error);
        alert("Enter pokemon that exists!!")
        pokemonImage.style.display = "none";
        input.value = "";
    }
}