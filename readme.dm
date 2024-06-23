# Pokémon Finder

This project is a simple web application that allows users to search for Pokémon by name using the [PokéAPI](https://pokeapi.co/). The application fetches the Pokémon data and displays the name and image of the Pokémon on the web page.

![Pokémon Finder GIF](https://github.com/MatthewSbt/EX---POKEMON/assets/118640223/9d920f2b-6c09-43df-871d-4a2d680b20e4)

## Features

- User can input a Pokémon name to search.
- Displays the Pokémon's name and image if found.
- Displays an error message if the Pokémon is not found.

## Technologies Used

- HTML
- CSS (Tailwind CSS for styling)
- JavaScript
- [PokéAPI](https://pokeapi.co/)

## How to Use

1. Enter the name of the Pokémon you want to search for in the input field.
2. Click the search button.
3. The Pokémon's name and image will be displayed if found, or an error message will be shown if the Pokémon is not found.

## Code Overview

### HTML Structure

The HTML file includes:
- An input field for the user to enter the Pokémon name.
- A button to trigger the search.
- A container to display the Pokémon's name and image or an error message.

### JavaScript Functionality

The JavaScript code handles the interaction and data fetching, which includes:
- Clearing the container content before inserting new Pokémon data.
- Fetching data from the PokéAPI based on user input.
- Updating the DOM with the Pokémon's name and image if found.
- Displaying an error message if the Pokémon is not found.

### CSS Styling

The application uses Tailwind CSS for styling. The styles applied include:
- Setting the image width.
- Controlling the display of the container.
- Styling the error message.

## Error Handling

- If the Pokémon name entered by the user is not found, an error message "Pokémon non trovato" (Pokémon not found) is displayed in red.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Any contributions are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

## Download

You can download the entire project as a ZIP file from the following link:
[Download Pokémon Finder](https://github.com/MatthewSbt/EX---POKEMON/archive/refs/heads/main.zip)
