import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, StyleSheets, Text, View, Button, Platform } from 'react-native';

import styles from '../Appstyles';
import ListContainer from '../components/ListContainer';

const About = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                {/* check device OS setup */}
                {
                    Platform.OS === 'ios'
                        ? <Text style={[styles.italicFont, styles.headingColor]}>Device: iOS</Text>
                        : <Text style={[styles.italicFont, styles.headingColor]}>Device type: Android</Text>
                }
            </View>
            {/* <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
            <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
            <Button title='Go to Categories' onPress={() => navigation.navigate('Categories')} /> */}

            <View style={styles.bgGradient}>
                <View style={styles.fillPage}>
                    <View style={styles.centText}>
                        <Text level="h1" style={styles.myH1}>
                            <Text style={[styles.italicFont]}>Onthe</Text>Scene: Series List
                        </Text>
                        <Text level="h3" style={styles.myH3}>
                            Highlighting Meaningful and Powerful Messages
                        </Text>
                        {/* <View style={styles.btnLinks}>
                            <Button title='Series Profile' onPress={() => navigation.navigate('Series')} style={styles.link2} />
                        </View> */}
                    </View>
                </View>
                <ListContainer />
            </View>
        </SafeAreaView>
    )
}

export default About;