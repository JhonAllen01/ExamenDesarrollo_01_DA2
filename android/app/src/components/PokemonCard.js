// src/components/PokemonCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PokemonCard = ({ pokemon }) => {
  const { name, url } = pokemon;
  // Extract the Pokémon ID from the URL
  const pokemonId = url.split('/')[url.split('/').length - 2];
  const imageUrl = `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`;
  
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <Text style={styles.cardText}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cardText: {
    fontSize: 18,
  },
});

export default PokemonCard;
