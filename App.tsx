import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../ExamenDesarrollo_01_DA2/android/app/src/views/HomeView';
import DetailsView from '../ExamenDesarrollo_01_DA2/android/app/src/views/DetailsView';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Details" component={DetailsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
