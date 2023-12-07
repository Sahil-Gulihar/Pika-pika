// main.js

async function getPokemonType() {
    const pokemonName = document.getElementById('pokemonName').value;
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + pokemonName.toLowerCase();
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const types = data.types.map(type => type.type.name);
      const resultText = `The type of ${pokemonName} is: ${types.join(', ')}`;
      document.getElementById('result').innerText = resultText;
    } catch (error) {
      console.error('Error fetching data:', error);
      document.getElementById('result').innerText = 'Error fetching data. Please try again.';
    }
  }
  