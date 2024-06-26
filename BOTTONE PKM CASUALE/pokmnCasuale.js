const container = document.getElementById("pokemonContainer");
const btn = document.getElementById("btn");

function generaPkmn() {
    container.textContent = "";
    const sceltaRandom = Math.floor(Math.random() * 1025) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${sceltaRandom}`)
        .then(response => response.json())
        .then(pokemon => {
            const h2 = document.createElement("h2");
            h2.innerText = `${pokemon.name}`;

            const img = document.createElement("img");
            img.src = `${pokemon.sprites.front_default}`;
            img.classList.add("w-[200px]");

            container.classList.remove("hidden");
            container.classList.add("flex");

            container.append(h2, img);
        })
        .catch(error => {
            console.error(error);
        });
}

btn.addEventListener('click', generaPkmn);
