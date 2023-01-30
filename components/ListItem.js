import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../Appstyles';

export default function ListItem({ children }) {

    return (
        <View>
            <Text style={styles.item}>{children}</Text>
        </View>
    );
}
