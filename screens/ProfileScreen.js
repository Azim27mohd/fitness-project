import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleDone = () => {
    if (!name || !age || !birthday || !email || !gender || !height || !weight) {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      if (!Number.isInteger(Number(age))) {
        Alert.alert('Error', 'Age must be in numbers');
      } else if (!Number.isInteger(Number(birthday))) {
        Alert.alert('Error', 'Birthday must be in numbers');
      } else if (!Number.isInteger(Number(height))) {
        Alert.alert('Error', 'Height must be in numbers');
      } else if (!Number.isInteger(Number(weight))) {
        Alert.alert('Error', 'Weight must be an numbers');
      } else 
      navigation.navigate('Workout');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.profileImageContainer}>
        <Image source={require('../assets/IMG7.jpg')} style={styles.profileImage} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#6b7280"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholder="Enter your age"
          placeholderTextColor="#6b7280"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Birthday Year:</Text>
        <TextInput
          style={styles.input}
          value={birthday}
          onChangeText={setBirthday}
          placeholder="Enter your birthday"
          placeholderTextColor="#6b7280"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Enter your email address"
          placeholderTextColor="#6b7280"
        />
      </View>

      <View style={styles.genderContainer}>
        <Text style={styles.label}>Gender:</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[styles.radioButton, gender === 'Male' && styles.selectedRadioButton]}
            onPress={() => handleGenderSelection('Male')}>
            <Text style={[styles.radioText, gender === 'Male' && styles.boldWhite]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, gender === 'Female' && styles.selectedRadioButton]}
            onPress={() => handleGenderSelection('Female')}>
            <Text style={[styles.radioText, gender === 'Female' && styles.boldWhite]}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, gender === 'Other' && styles.selectedRadioButton]}
            onPress={() => handleGenderSelection('Other')}>
            <Text style={[styles.radioText, gender === 'Other' && styles.boldWhite]}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height:</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
          placeholder="Enter your height (in cm)"
          placeholderTextColor="#6b7280"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight:</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
          placeholder="Enter your weight (in kg)"
          placeholderTextColor="#6b7280"
        />
      </View>

      <TouchableOpacity onPress={handleDone} style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#075eec',
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#075eec',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  genderContainer: {
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButton: {
    width: '30%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  selectedRadioButton: {
    backgroundColor: '#075eec',
  },
  radioText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#075eec',
  },
  boldWhite: {
    fontWeight: 'bold',
    color: '#fff',
  },
  doneButton: {
    backgroundColor: '#075eec',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
