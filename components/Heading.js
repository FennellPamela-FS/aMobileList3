import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Heading({ children, level }) {
  // 2nd UI that our API reaches out to
  // https://crudapidemo-wdv463.herokuapp.com/api/v1/students
  // fetch(`https://crudapidemo-wdv463.herokuapp.com/api/v1/students`)
  //   .then(res => res.json())
  //   .then(data => console.log({ data }))

  return (
    <View>
      {/* set this Text role to read as a heading for a screen reader */}
      <Text>List Items: </Text>
      {/* <Text style={styles.text}>{children}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}


