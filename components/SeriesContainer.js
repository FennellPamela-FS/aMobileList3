import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, Text, View, TouchableOpacity, Button } from 'react-native';
import ListItem from './ListItem';

// Styles
import styles from '../Appstyles'

export default function SeriesContainer({ data }) {

    const [series, setSeries] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    const [values, setValues] = useState({
        title: '',
        description: '',
        videolink: '',
    })
    const { id } = useState(route.params);
    console.log('I AM here', id);
    console.log({ id });

    const API_BASE = 'https://mycrudapi.herokuapp.com/api/v1/';

    useEffect(() => {
        let ignore = false;

        // reach out to API only once
        if (!ignore) {
            // getSeries();
            getSingleSeries();
        }
        return () => {
            ignore = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // no dependencies


    const getSingleSeries = async () => {
        setLoading(true)
        try {
            await fetch(`${API_BASE}/series/${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log({ data });
                    // setSeries(data);
                    setSeries({
                        ...series,
                        title: data.title,
                        description: data.description,
                        videolink: data.videolink,
                    });
                    setValues(data)
                });
        } catch (error) {
            setErrors(error.message || "Unexpected Error")
        } finally {
            setLoading({ ...loading, loading: false });
        }

    }


    // // reach out to server
    // const deleteSeries = async () => {
    //     setLoading(true)
    //     try {
    //         await fetch(`${API_BASE}/series/${id}`, {
    //             // option Delete
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 setSeries(data);
    //                 // navigate back to the dashboard, replace history with this
    //                 navigate("/dashboard", { replace: true })
    //             })
    //     } catch (error) {
    //         // setErrors(error.message || "Unexpected Error")
    //         setErrors({
    //             ...errors,
    //             fetchError: true,
    //             fetchErrorMsg:
    //                 'Unexpected Error',
    //         })
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    // // 
    // const updateSingleSeries = async () => {
    //     try {
    //         await fetch(`${API_BASE}/series/${id}`, {
    //             // PATCH option
    //             method: 'PATCH',
    //             headers: {  // check headers are sending json
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(values)    // send updated stringify values
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log({ data })
    //             })
    //     } catch (error) {
    //         // setErrors(error.message || "Unexpected Error")
    //         setErrors({
    //             ...errors,
    //             fetchError: true,
    //             fetchErrorMsg:
    //                 'Unexpected Error',
    //         })
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    // // take event
    // const handleSubmit = (event) => {
    //     event.preventDefault(); // prevent form from submitting the page by default
    //     updateSingleSeries();
    // }

    // // take event to allow it to update and set values while it changes
    // const handleInputChanges = (event) => {
    //     event.persist();
    //     setValues((values) => ({
    //         ...values,  // use spread operator to get the latest version of values
    //         [event.target.name]: event.target.value // set value from the form to the event target name
    //     }))
    // }



    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={[styles.centText, styles.myH3]}>{values && values.title}</Text>
                <Text>{values && values.description}</Text>
                <Text>{values && values.videolink}</Text>
                <Button title={`${values.videolink}`} onPress={() => navigation.navigate(`${values.videolink}`)} style={styles.link2}>Launch Video</Button>
            </View>
            {/* loop or map over our item to get the info */}
            <FlatList
                data={series}
                renderItem={({ values }) =>
                    // <TouchableOpacity onPress={() => navigation.navigate(`/series/${item._id}`)}>
                    <ListItem>
                        <Text>{values.title}</Text>
                        <Text>{values.info}</Text>
                        <Button title={`${values.videolink}`} onPress={() => navigation.navigate(`${values.videolink}`)} style={styles.link2}>{values.videolink}</Button>
                    </ListItem>
                    // </TouchableOpacity>
                }
                keyExtractor={item => item._id}
                style={styles.listContainer}
            />
        </SafeAreaView >
    );
}