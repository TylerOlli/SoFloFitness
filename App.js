import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = React.useState(0);
  console.log('Before');
  debugger;
  console.log('After');
  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button
        onPress={() => {
          setCounter(counter + 1);
        }}
        title='Increment'
      />
      <Button
        onPress={() => {
          setCounter(counter - 1);
        }}
        title='Decrement'
      />
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
