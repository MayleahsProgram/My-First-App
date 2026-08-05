import { StatusBar } from 'expo-status-bar';
import { useState , useRef , useEffect, ReactNode } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, ScrollView, Animated, StyleProp, ViewStyle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator , NativeStackScreenProps } from '@react-navigation/native-stack';


type RootStackParamList = {
  Home: undefined;
  View: {
     NameSend: string;
      SurnameSend: string;
     };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type MainScreenProps = NativeStackScreenProps<
RootStackParamList, 
'Home'
>;

type ViewDetailsProps = NativeStackScreenProps<
RootStackParamList,
 'View'
 >;

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="View" component={ViewDetails} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
  

function MainScreen({ navigation }: MainScreenProps){
  
const[Name, setName] = useState('');
const[Surname, setSurname] = useState('');

console.log("App works!");


return (
  <View>
    <SafeAreaView>
      <ScrollView>
    <Image style ={styles.image}
    source={require('./images/67.jpg')}
  
        />
        <Text style={styles.welcomeTxt}> Welcome to my app!</Text>
  <FadeInView>
   <View style={styles.inputFlex}>
      <Text style={styles.headingTxt}> Enter your name:</Text>
      <TextInput style={styles.inputBoxTxt}
       placeholder="Bob"
        onChangeText={(newText) => setName(newText)} />

      <Text style={styles.headingTxt}> Enter your surname:</Text>
      <TextInput style={styles.inputBoxTxt}
        placeholder="builder"
        onChangeText={(newText) => setSurname(newText)} />
        </View>
        </FadeInView>
      
      <Button title="Add user"
        onPress={() => {
          navigation.navigate('View', {
             NameSend: Name, 
             SurnameSend: Surname
             });
          
        }}/>
      <StatusBar style="auto" />

      </ScrollView>
      </SafeAreaView>
      </View>
  
  );
}

function ViewDetails({ navigation , route}:ViewDetailsProps){

  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Name : {NameGet} Surname : {SurnameGet}</Text>
    </View>
  );
}

interface FadeInViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FadeInView = ({children,style}: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false, // Allows to be run on an android device and avoids warning
      }
    ).start();
  }, [fadeAnim]);

  return(
    <Animated.View                 
      style={{
        ...(style as object),
        opacity: fadeAnim ,         
      }}>
      {children}
      </Animated.View>
  )
};

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 100,
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  headingTxt: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
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
  inputBoxTxt: {
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