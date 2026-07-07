import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { liar, caught, winner } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over!</Text>
      
      <View style={styles.resultCard}>
        <Text style={styles.resultText}>
          {winner === 'Civilians' ? '🎉 Civilians Win!' : '🕵️ Liar Wins!'}
        </Text>
      </View>

      <View style={styles.detailsCard}>
        <Text style={styles.detailLabel}>The Liar was:</Text>
        <Text style={styles.detailValue}>{liar}</Text>
        
        <Text style={styles.detailLabel}>Caught:</Text>
        <Text style={styles.detailValue}>{caught}</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  resultCard: {
    backgroundColor: '#333',
    padding: 30,
    borderRadius: 15,
    marginBottom: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#34C759',
  },
  detailsCard: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  detailLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
    marginTop: 15,
  },
  detailValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
