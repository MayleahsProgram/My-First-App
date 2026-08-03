import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
   
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="View" component={ViewDetails} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
  

function MainScreen() {
  
const[Name, setName] = useState('');
const[Surname, setSurname] = useState('');

console.log("App works!");



  return (
    
  
      <View>
        <Image
          source={require('./images/67.jpg')}
          style={styles.image}
        />
<View style={styles.inputFlex}>
      <Text style={styles.welcomeTxt}> welcome to my app</Text>

      <Text style={styles.label}> Please enter your name</Text>
      <View style={styles.divider} />
      <TextInput
      style={styles.input} 
      placeholder="Bob" 
      onChangeText={(newText) => setName(newText)} 
      autoCapitalize="words"
      autoCorrect={false}
      keyboardType="default"
      />

      <Text style={styles.label}> Please enter your surname</Text>
      <View style={styles.divider} />
      <TextInput 
      style={styles.input} 
      placeholder="builder" 
      onChangeText={(newText) => setSurname(newText)} 
      autoCapitalize="words"
      autoCorrect={false}
      keyboardType="default"
      />
      </View>

      <Button title="Add user"
        onPress={() => {
          navigation.navigate('View')
          console.log("Name:" + Name + "Surname: " + Surname);
        }}
       />
      <StatusBar style="auto" />
    </View>
    
    
    
  );
}

function ViewDetails() {
  return (
    <View> style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      <Text>Name : {Name} Surname : {Surname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 100,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  inputFlex: {
    justifyContent:'space-evenly',
    marginTop: 20,
  }
})