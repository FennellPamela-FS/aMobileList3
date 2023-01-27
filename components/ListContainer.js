import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import ListItem from './ListItem';

import styles from '../Appstyles'


export default function ListContainer({ data }) {

    const DATA = [
        {
            _id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            _id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            _id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    // const renderItem = ({ item }) => (
    //     <ListItem>{item.title}</ListItem>
    // );

    return (
        // loop or map over our item to get the info
        <FlatList
            data={DATA}
            renderItem={({ item }) => <ListItem>{item.title}</ListItem>}
            keyExtractor={item => item._id}
            style={styles.listContainer}
        />
    );
}


