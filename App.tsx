import React, { useState, Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import createExercise from './test';
import { Set, Exercise } from './backend/models';

const set1: Set = {
  repetitions: 8,
  weight: 80,
  rest: 60

}
const exercise: Exercise = {
  name: 'Deadlift',
  date: Date.UTC.toString(),
  sets: [set1]
};

export default function App() {

  const [test1, setTest1] = useState("");

  const onScreenLoad = () => {
    setTest1(createExercise(exercise));
  }
  useEffect(() => {
    onScreenLoad();
  }, [])


  return (
    <View style={styles.container}>
      <Text>{test1}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
