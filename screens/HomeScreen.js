import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Fitness Title */}
      <Text style={styles.title}>BEFIT</Text>

      {/* Image */}
      <Image
        source={require('../assets/IMG1.jpg')}
        style={styles.image}
      />

      {/* Second Title */}
      <Text style={styles.subTitle}>Welcome to the world of fitness</Text>

      {/* Paragraph */}
      <Text style={styles.paragraph}>Loving the process, celebrating progress by tracking your work it keeps you inspired and motivated</Text>

      {/* Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Let's get started {'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#075eec',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#666',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 40,
    color: '#444',
  },
  button: {
    backgroundColor: '#075eec',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default HomeScreen;
