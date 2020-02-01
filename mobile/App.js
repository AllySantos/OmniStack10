import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bom dia </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',

  }
});
