import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ListItem({ children }) {

    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
}
