const container = document.getElementById("pokemonContainer");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

function generaPkmn() {
    container.textContent = ""; // Pulisce il contenuto del container prima di inserire il nuovo Pokémon
    const inputUtente = input.value.trim().toLowerCase(); // Prende l'input dell'utente e lo normalizza

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputUtente}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon non trovato');
            }
            return response.json();
        })
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
            container.textContent = "Pokémon non trovato"; // Messaggio di errore nel container
            container.classList.remove("hidden");
            container.classList.add("flex", "text-red-500"); // Applica uno stile rosso per indicare l'errore
        });
}

btn.addEventListener('click', generaPkmn);
