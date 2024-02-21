// src/views/HomeView.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
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
      <Image source={require('./img/logoPM.png')} style={styles.logo} />
      <Text style={styles.header}>First Generation</Text>
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
  logo: {
    width: '100%',
    height: 100, 
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginVertical: 10, 
  },
  list: {
    paddingHorizontal: 10,
  },
});

export default HomeView;
