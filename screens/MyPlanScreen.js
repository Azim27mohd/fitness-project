import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';

const MyPlanScreen = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workoutName, setWorkoutName] = useState('');
  const [selectedExercise, setSelectedExercise] = useState('');

  const predefinedExercises = [
    'Squats x10', 'Push-Ups x10', 'Pull-Ups x10', 'Deadlifts x10', 'Plank x10', 
    'Lunges x10', 'Burpees x10', 'Curls x10', 'Russian Twists x10', 'Jumping Jacks x10'
  ];

  const addWorkout = () => {
    if (workoutName.trim() === '') {
      Alert.alert('Error', 'Please type your name');
      return;
    }
    
    if (selectedExercise === '') {
      Alert.alert('Error', 'Please select an exercise');
      return;
    }

    const newWorkout = {
      name: workoutName,
      exercise: selectedExercise
    };
    
    setWorkouts([...workouts, newWorkout]);
    setWorkoutName('');
    setSelectedExercise('');
  };

  const clearWorkout = (index) => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
  };

  const saveWorkouts = () => {
    // Here you can implement the logic to save the workouts
    // For example, you can store them in AsyncStorage or send them to a server
    Alert.alert('Success', 'Workout plan saved successfully');
  };

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>My Plan</Text>
      </View>
      <View style={styles.exerciseRow}>
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Exercises:</Text>
          {predefinedExercises.map((exercise, index) => (
            <TouchableOpacity key={index} onPress={() => handleExerciseSelect(exercise)}>
              <Text style={[styles.exerciseText, selectedExercise === exercise && styles.selectedExerciseText]}>{exercise}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>Calories & Time:</Text>
          <Text style={styles.exerciseText}>200 CALS, 5 mins</Text>
          <Text style={styles.exerciseText}>300 CALS, 10 mins</Text>
          <Text style={styles.exerciseText}>500 CALS, 10 mins</Text>
          <Text style={styles.exerciseText}>300 CALS, 10 mins</Text>
          <Text style={styles.exerciseText}>250 CALS, 5 mins</Text>
          <Text style={styles.exerciseText}>350 CALS, 10 mins</Text>
          <Text style={styles.exerciseText}>400 CALS, 10 mins</Text>
          <Text style={styles.exerciseText}>300 CALS, 5 mins</Text>
          <Text style={styles.exerciseText}>200 CALS, 5 mins</Text>
          <Text style={styles.exerciseText}>400 CALS, 10 mins</Text>
        </View>
      </View>
      <ScrollView style={styles.workoutList}>
        {workouts.map((workout, index) => (
          <View key={index} style={styles.workoutItem}>
            <Text style={styles.workoutName}>{workout.name} - {workout.exercise}</Text>
            <TouchableOpacity onPress={() => clearWorkout(index)} style={styles.clearButton}>
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.addWorkoutContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Workout Name"
          value={workoutName}
          onChangeText={text => setWorkoutName(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addWorkout}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={saveWorkouts}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerContainer: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  exerciseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  exerciseContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#075eec',
  },
  exerciseText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black', 
  },
  selectedExerciseText: {
    color: '#075eec', 
  },
  workoutList: {
    flex: 1,
    marginBottom: 20,
  },
  workoutItem: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  workoutName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  addWorkoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  clearButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff', 
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MyPlanScreen;
