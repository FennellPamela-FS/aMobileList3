
import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    largeHeading: {
        fontSize: 80,
    },
    italicFont: {
        fontStyle: 'italic',
    },
    listContainer: {
        flexGrow: 0,
        flexShrink: 0,
        // alignContent: 'flex-start',
        // height: 200,

    },
    //  change a section of the app based on the OS
    headingColor: {
        ...Platform.select({
            ios: {
                color: 'red',
            },
            android: {
                color: 'yellow',
            },
            default: {
                color: 'blue',
            },
        })
    }
});

export default styles;