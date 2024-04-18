import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FitnessItems } from "../Context";
import FitnessCards from '../components/FitnessCards';

const WorkoutScreen = ({ navigation }) => {
  const { minutes, calories, workout } = useContext(FitnessItems);

  const handleMyPlan = () => {
    navigation.navigate('MyPlan');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.headerText}>WORKOUT PLANS</Text>
        <View style={styles.statsContainer}>
          <View>
            <Text style={styles.statText}>{workout}</Text>
            <Text style={styles.subText}>EXERCISES</Text>
          </View>
          <View>
            <Text style={styles.statText}>{calories}</Text>
            <Text style={styles.subText}>KCAL</Text>
          </View>
          <View>
            <Text style={styles.statText}>{minutes}</Text>
            <Text style={styles.subText}>MINS</Text>
          </View>
        </View>
        <View style={styles.chooseWorkoutContainer}>
          <Text style={styles.chooseWorkoutText}>Choose your Workout !</Text>
          <Text style={styles.chooseWorkoutText}>OR</Text>
          <TouchableOpacity onPress={handleMyPlan} style={styles.myPlanButton}>
            <Text style={styles.buttonText}>CREATE YOUR PLAN HERE !</Text>
          </TouchableOpacity>
        </View>
        <FitnessCards />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#075eec',
    padding: 20,
    minHeight: '100%',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  subText: {
    color: '#D0D0D0',
    fontSize: 16,
    marginTop: 6,
  },
  chooseWorkoutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  chooseWorkoutText: {
    fontSize: 20,
    color: '#D0D0D0',
    textAlign: 'center',
    marginBottom: 20,
  },
  myPlanButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#075eec',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default WorkoutScreen;
