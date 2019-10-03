import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
    return (
      <View style={styles.container}>
        <Text>Select the game mode.</Text>
        <Text>Random</Text>
        <Text>Targeted</Text>
      </View>
    );
  }