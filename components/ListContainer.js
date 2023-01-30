import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, Text, View, TouchableOpacity, TouchableHighlight, Button, Pressable } from 'react-native';
import ListItem from './ListItem';

// Styles
import styles from '../Appstyles';


export default function ListContainer({ data }) {

    const [series, setSeries] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const [values, setValues] = useState({
        title: '',
        description: '',
        videolink: '',
    })

    const API_BASE = 'https://mycrudapi.herokuapp.com/api/v1';

    useEffect(() => {
        let ignore = false;

        // reach out to API only once
        if (!ignore) {
            getSeries();
        }
        return () => {
            ignore = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // no dependencies

    const getSeries = async () => {
        setLoading(true)
        try {
            await fetch(`${API_BASE}/series`)
                .then(res => res.json())
                .then(data => {
                    console.log({ data });
                    setSeries(data);
                    setValues({
                        ...values,
                        title: data.title,
                        info: data.description,
                        videolink: data.videolink
                    })
                });
        } catch (error) {
            // setErrors(error.message || "Unexpected Error")
            setErrors({
                ...errors,
                fetchError: true,
                fetchErrorMsg:
                    'Unexpected Error',
            })
        } finally {
            setLoading({ ...loading, loading: false });
        }

    }



    return (
        <SafeAreaView style={styles.container}>
            {/* loop or map over our item to get the info */}
            <FlatList
                data={series}
                renderItem={({ item }) =>
                    <View>
                        <ListItem>
                            <Button title='Series Profile' onPress={() => navigation.navigate('SeriesProfile', `${item._id}`)} style={styles.link1} />
                            <Text style={styles.myText}>{item.title} </Text>
                            <Text style={styles.myText}>{item.videolink} </Text>
                            <Button title='Watch Video' onPress={() => navigation.navigate(`${item.videolink}`)} style={styles.link2} />
                        </ListItem>
                    </View>
                }
                keyExtractor={item => item._id}
                style={styles.listContainer}
            />
            {/* <MySeries /> */}
        </SafeAreaView >
    );
}