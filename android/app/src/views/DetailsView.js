// src/views/DetailsView.js
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { fetchPokemonDetail } from '../API/pokemon';

const DetailsView = ({ route }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { pokemonName } = route.params;

  useEffect(() => {
    fetchPokemonDetail(pokemonName).then((response) => {
      setPokemonDetails(response.data);
    });
  }, [pokemonName]);

  if (!pokemonDetails) return null;

  const { id, name, sprites, height, weight, types, moves } = pokemonDetails;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: sprites.front_default }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
        <Text style={styles.details}>#{id}</Text>
        <Text style={styles.details}>Height: {height}</Text>
        <Text style={styles.details}>Weight: {weight}</Text>
        <Text style={styles.sectionTitle}>Types</Text>
        {types.map((typeEntry) => (
          <Text key={typeEntry.type.name} style={styles.details}>
            {typeEntry.type.name.toUpperCase()}
          </Text>
        ))}
        <Text style={styles.sectionTitle}>Moves</Text>
        {moves
        .slice(0, 10) // Limitar a los primeros 10 movimientos para simplificar la vista
        .map((moveEntry) => (
          <Text key={moveEntry.move.name} style={styles.listItem}>
            {moveEntry.move.name.charAt(0).toUpperCase() + moveEntry.move.name.slice(1)}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#fafafa',
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  details: {
    fontSize: 16,
    marginVertical: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default DetailsView;
