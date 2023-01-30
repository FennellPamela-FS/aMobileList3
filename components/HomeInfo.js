import React from 'react'
import { Button, Text, View } from 'react-native';

import styles from '../Appstyles';

const HomeInfo = () => {
    return (
        <View style={styles.bgGradient}>
            <View style={styles.fillPage}>
                <View>
                    <View style={styles.centText}>
                        <Text level="h1" style={styles.myH1}>
                            Welcome to <em>Onthe</em>Scene
                        </Text>
                        <Text level="h3" style={styles.myH3}>
                            Highlighting Meaningful and Powerful Messages
                        </Text>
                        <Text style={styles.pHero}>
                            Feature of the Month: Peace of Mind: In this series we will look at how some familiar names in scripture dealt with many of the same struggles we face today. We’ll learn how they overcame those struggles not through their own strength, but by depending on God.
                        </Text>
                        <View style={styles.btnLinks}>
                            <Button title='View Series' onPress={() => navigation.navigate('Details')} style={styles.link1} />
                            <Button title='Dashboard' onPress={() => navigation.navigate('Details')} style={styles.link2} />
                        </View>
                    </View>
                </View>
                <Text style={styles.title}>About Info</Text>
            </View>
        </View>
    )
}

export default HomeInfo;


    // <View>
    //     {/* <div style={styles.container}>
    //                     {
    //                         series?.map(show => (
    //                             <div className='bg-blue-500' style={styles.card}>
    //                                 <li key={show._id} style={styles.items}>
    //                                     <Link to={`/series/${show._id}`}>{show.title}</Link>
    //                                 </li>
    //                             </div>
    //                         ))
    //                     }
    //                 </div> */}
    // </View>
// </View>