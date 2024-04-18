import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../Context";
import { useEffect } from "react";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersises = route.params.excersises;
  const nextIndex = index + 1;
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout
  } = useContext(FitnessItems);
  console.log(completed, "completed excersise")

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIndex(nextIndex);
    });

    return unsubscribe;
  }, [navigation, nextIndex]);

  if (!excersises || excersises.length === 0 || index >= excersises.length) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>Congrats! No more exercises found.</Text>
          <Text style={styles.submessage}>Why not try some new exercises?</Text>
        </View>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate('Workout')}>
          <Text style={styles.buttonText}>Back to Workout page</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const current = excersises[index];

  if (!current || !current.image) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>Oops! No image found for the current exercise.</Text>
          <Text style={styles.submessage}>Make sure to add images for all exercises.</Text>
        </View>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate('Workout')}>
          <Text style={styles.buttonText}>Back to Workouts</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1); // Move to the previous exercise
    }
  };

  // Function to handle navigation to the next exercise or Rest screen
  const handleNext = () => {
    if (index < excersises.length - 1) {
      setIndex(index + 1); // Move to the next exercise
    } else {
      navigation.navigate("Rest"); // Navigate to Rest screen when all exercises are completed
    }
  };

  // Function to handle skipping the current exercise
  const handleSkip = () => {
    handleNext(); // Move to the next exercise
  };


  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: current.image }}
      />
      <Text style={styles.name}>{current.name}</Text>
      <Text style={styles.sets}>x{current.sets}</Text>

      <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed,current.name])
            setWorkout(workout+1)
            setMinutes(minutes+2.5)
            setCalories(calories+6.30)
            setTimeout(() => {
               setIndex(index + 1)
            },2000)
          }}
          style={styles.doneButton}
        >
          <Text style={styles.buttonText}>DONE</Text>
        </Pressable>

        <View style={styles.buttonGroup}>
          <Pressable onPress={handlePrev} style={styles.prevButton}>
            <Text style={styles.buttonText}>PREV</Text>
          </Pressable>
          <Pressable onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.buttonText}>SKIP</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray background color
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#075eec', // Dark blue text color
    marginBottom: 10,
    textAlign: 'center',
  },
  submessage: {
    fontSize: 18,
    color: '#555', // Gray text color
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#075eec',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  name: {
    marginRight:"auto",
    marginLeft:"auto",
    fontSize:30,
    fontWeight:"bold",
  },
  sets: {
    marginRight:"auto",
    marginLeft:"auto",
    fontSize:38,
    fontWeight:"bold",
  },
  doneButton: {
    backgroundColor: '#075eec',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  prevButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  skipButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
});
