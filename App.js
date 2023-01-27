import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, Text, View, Button, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Network from 'expo-network';


import Details from './pages/Details';
import Categories from './pages/Categories';

import Heading from './components/Heading';
import ListContainer from './components/ListContainer';


import styles from './Appstyles';

// HomeScreen component along with default app
function HomeScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.largeHeading, styles.italicFont]}>Hello Rose!</Text>
      <Heading />
      {/* check device OS setup */}
      {
        Platform.OS === 'ios'
          ? <Text style={[styles.largeHeading, styles.italicFont]}>I am OS</Text>
          : <Text style={[styles.largeHeading, styles.italicFont]}>I am NOT on iOS</Text>
      }
      <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
      <ListContainer />
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <StatusBar style="auto" />
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
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'App Name' }} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

