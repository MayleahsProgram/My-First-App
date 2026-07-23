import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.welcomeText}>
      <Text>Welcome to my app!</Text>
      <Text>Enter your name:</Text>
      <TextInput placeholder="Amy"/>
      <Text>Enter your surname:</Text>
      <TextInput placeholder="Green"/>

      <Button title= "Add new user"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    padding: 50,
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
});
