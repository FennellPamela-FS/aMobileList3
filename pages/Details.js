import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, StyleSheets, Text, View, Button } from 'react-native';

import styles from '../Appstyles';


const Details = ({ navigation, id }) => {

    console.log({ id });

    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.largeHeading, styles.italicFont]}>Details</Text>
            <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
            <Button title='Go to About' onPress={() => navigation.navigate('About')} />
            <Button title='Go to Categories' onPress={() => navigation.navigate('Categories')} />
        </SafeAreaView>
    )
}

export default Details;