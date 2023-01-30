import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, StyleSheets, Text, View, Button } from 'react-native';

import styles from '../Appstyles';

const Categories = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={[styles.largeHeading, styles.italicFont, styles.headingColor]}>Categories</Text>
            <View style={styles.listContainer}>
                <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
                <Button title='Go to About' onPress={() => navigation.navigate('About')} />
                <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
            </View>
        </SafeAreaView>
    )
}

export default Categories;