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
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3, // Solo para Android
      padding: 10,
    },
    cardImage: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    cardText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default PokemonCard;
