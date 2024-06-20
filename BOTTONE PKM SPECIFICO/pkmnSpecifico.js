// Puntatore
const container = document.getElementById("pokemonContainer");
const btn = document.getElementById("btn")
const input = document.getElementById("input")





function generaPkmn() {
    container.textContent = "";
    const inputUtente = input.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputUtente}`)
    // RSISPOSTA FETCH = POKEMON
    // CONVERTE IN JSON
    .then(pokemon => pokemon.json())
    // CREA NOME E IMG DEL POKEMON
    .then(
        pokemon => {
        const h2 = document.createElement("h2")
        h2.innerText = `${pokemon.name}`

        const img = document.createElement("img")
        img.src = `${pokemon.sprites.front_default}`;
        img.classList.add("w-[200px]")
        container.classList.remove("hidden")
        container.classList.add("flex")
        
        container.append(h2, img)
        }
    )

    .catch(error => {
        console.error(error)
    });
}



btn.addEventListener('click', generaPkmn);