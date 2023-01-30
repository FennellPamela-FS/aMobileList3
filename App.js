import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, Text, View, Button, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import About from './pages/About';
import Details from './pages/Details';
import Categories from './pages/Categories';

// Components
// import HomeInfo from './components/HomeInfo';
// import Heading from './components/Heading';
// import ListContainer from './components/ListContainer';

// Styles
import styles from './Appstyles';


function MySeries() {
  const route = useRoute();

  return <Text>{route.params.id}</Text>
}

function SeriesProfile() {
  return (
    <View style={styles.container}>
      <Text>This the Series Profile</Text>
      <MySeries />
    </View>
  )
}

// HomeScreen component along with default app
function HomeScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.bgGradient}>
          <View style={styles.fillPage}>
            <View style={styles.centText}>
              <Text level="h1" style={styles.myH1}>
                Welcome to <Text style={[styles.italicFont]}>Onthe</Text>Scene
              </Text>
              <Text level="h3" style={styles.myH3}>
                Highlighting Meaningful and Powerful Messages
              </Text>
              <Text style={styles.pHero}>
                Feature of the Month: Peace of Mind. Taking a look at how some familiar names in scripture dealt with many of the same struggles we face today. We’ll learn how they overcame those struggles not through their own strength, but by depending on God.
              </Text>
              <View style={styles.btnLinks}>
                <Button title='View Series' onPress={() => navigation.navigate('About')} style={styles.link1} />
                <Button title='Details' onPress={() => navigation.navigate('Details')} style={styles.link2} />
              </View>
            </View>
            <View style={[styles.switchTop, styles.container]}>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.container}
              />
            </View>
            <StatusBar style="auto" />
          </View>
        </View>

      </View>
      {/* <View style={styles.container}>
        <Text style={[styles.largeHeading, styles.italicFont]}>Welcome</Text>
      </View>
      <Heading />
      <View style={styles.myNav}>
        <Button title='Go to About' onPress={() => navigation.navigate('About')} style={styles.a} />
        <Button title='Go to Details' onPress={() => navigation.navigate('Details')} style={styles.a} />
        <Button title='Go to Categories' onPress={() => navigation.navigate('Categories')} style={styles.a} />
      </View>
      <View style={styles.container}>
        <ListContainer />
      </View> */}
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  // fetch(`https://crudapidemo-wdv463.herokuapp.com/api/v1/students`)
  //   .then(res => res.json())
  //   .then(data => console.log({ data }))

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'OntheScene' }} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Profile" component={SeriesProfile} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

