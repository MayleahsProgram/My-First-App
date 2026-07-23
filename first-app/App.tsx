import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default function App() {
  return (
    <View >
      <Image style={styles.image} source={require('./images/67.jpg')} />
      <Text style={styles.welcomeText}>Welcome to my app!</Text>
      <Text style={styles.headerText}>Enter your name:</Text>
      <TextInput style={styles.inputText} placeholder="Amy"/>
      <Text style={styles.headerText}>Enter your surname:</Text>
      <TextInput style={styles.inputText} placeholder="Green"/>

      <Button title= "Add new user"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 60,
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "white",
  },
  headerText: {
    paddingTop: 50,
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    textDecorationLine: "underline",

  },
  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginLeft: 100,
  },


});
