// src/views/HomeView.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchPokemons } from '../API/pokemon';
import PokemonCard from '../components/PokemonCard';

const HomeView = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons().then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pokédex</Text>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    padding: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
});

export default HomeView;
