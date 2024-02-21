// src/api/pokemonApi.js
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemons = (offset = 0, limit = 151) => {
  return axios.get(`${BASE_URL}?offset=${offset}&limit=${limit}`);
};

export const fetchPokemonDetail = (pokemonName) => {
  return axios.get(`${BASE_URL}/${pokemonName}`);
};