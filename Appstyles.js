import { StyleSheet, Platform } from "react-native";


/* Primary COLORS With # */
/* #414c6b, #1e80c1, #5baeb7, #a5def2  */
/* https://coolors.co/424874-dcd6f7-a6b1e1-cacfd6-d6e5e3  */

/* alternate colors */
/* #797ef6, #4adede, #1aa7ec, #1e2f97 */


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    myText: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 6,
        paddingRight: 6,
    },
    item: {
        backgroundColor: '#fc7',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        alignItems: 'center',
        padding: 16,
    },
    titleText: {
        marginVertical: 30,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    switchTop: {
        padding: 16,
    },
    myNav: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        listStyle: 'none',
        margin: 0,
        width: '100%',
    },

    /* Style the topnav links */
    a: {
        display: 'block',
        color: '#f2f2f2',
        textDecoration: 'none',
        padding: '1em',
        textTransform: 'uppercase',
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
        margin: 16,
        padding: 16,
        // justifyContent: 'center',
        // alignContent: 'center',
        // height: 200,

    },
    //  change a section of the app based on the OS
    headingColor: {
        ...Platform.select({
            ios: {
                color: 'red',
                padding: 5,
            },
            android: {
                color: '#797ef6',
                padding: 5,
            },
            default: {
                color: 'blue',
                padding: 5,
            },
        })
    },
    backgroundColor: {
        backgroundColor: '#797ef6',
    },
    textColor: {
        color: 'white',
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px',
        borderRadius: 6,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    },
    inputLong: {
        display: 'block',
        width: '100%',
        height: 96,
        fontSize: 16,
        borderRadius: 6,
        borderColor: 'rgb(209 213 219)',
        paddingLeft: 24,
        paddingRight: 48,
    },
    input: {
        display: 'block',
        width: '100%',
        height: 32,
        fontSize: 16,
        borderRadius: 6,
        borderColor: 'rgb(209 213 219)',
        paddingLeft: 24,
        paddingRight: 48,
    },
    centText: {
        textAlign: 'center',
    },
    myH1: {
        fontSize: 36,
        fontWeight: '700px',
        color: '#111827',
        letterSpacing: '-0.025em',
        lineHeight: 40,
        marginTop: 16,
        marginBottom: 16,
        // smText: {
        //     maxWidth: '640px',
        //     fontSize: '3.75rem',
        //     lineHeight: 1,
        // },
    },
    myH3: {
        marginTop: 24,
        fontSize: 20,
        lineHeight: 24,
        color: '#111827',
    },
    pHero: {
        fontSize: 16,
        lineHeight: 24,
        color: '#111827',
        margin: 24,
    },
    btn: {
        //  px-1.5 ring-1 ring-slate-200 rounded
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 4,
        border: '1px solid #1e80c1',
    },
    btnLinks: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,

    },
    link1: {
        borderRadius: 6,
        backgroundColor: '#414c6b',
        padding: 14,
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: '-0.025em',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    },
    link2: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: 'rgb(17 24 39)',
    },
    editLink: {
        // text-base font-semibold leading-7 text-gray-900
        paddingLeft: '14',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: 'rgb(17 24 39)',
    },
    aWatch: {
        textDecoration: 'none',
    },
    watch: {
        // text-base font-semibold leading-7 text-gray-900
        fontSize: 16,
        fontWeight: '600',
        // lineHeight: 24,
        color: '#797ef6',
        textDecoration: 'none',
        backgroundColor: 'white',
        // boxShadow: '0 1px 2px 0 rgba(0, 0',
        padding: 20,
        borderRadius: 6,
        outline: 'none',
    },
    current: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: '#797ef6',
        textDecoration: 'none',
        backgroundColor: 'white',
        boxShadow: '0 1px 2px 0 rgba(0, 0',
        padding: 20,
        borderRadius: 6,
    },
    breadCrumb: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        color: 'rgb(17 24 39)',
        textDecoration: 'none',
        padding: 16,
    },
    bgGradient: {
        padding: 40,
        backgroundImage: 'linear-gradient(#a5def2, #fff)',

    },
    create: {
        display: 'flex',
        flex: '33%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100%',
        margin: 'auto',
        padding: '3px',
    },
    card: {
        flex: '45%',
        backgroundColor: '#f2f2f2',
        margin: 32,
        padding: '10px',
        width: '100%',
        maxWidth: '640px',
        height: 240,
        textAlign: 'left',
        border: '2px solid lightblue',
        borderRadius: '1.5em',
    },
    noCard: {
        flex: '45%',
        margin: 32,
        padding: '10px',
        width: '100%',
        maxWidth: '640px',
        height: 240,
        textAlign: 'left',
    },
    section: {
        paddingTop: 24,
        paddingLeft: 24,
    },
    createRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 32,
        rowGap: 40,
    },
    createCol: {
        display: 'flex',
        flexDirection: 'column',
    },
    leftList: {
        listStyleType: 'none',
        marginTop: 16,
        paddingBottom: 24,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500px',
        color: '#1e80c1',

    },
    btnSub: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        borderColor: 'transparent',
        backgroundColor: '#1e80c1',
        marginTop: 16,
        padding: 16,
        fontSize: 14,
        fontWeight: '500px',
        color: 'white',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    },
    rows: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    series: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },


    article: {
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: 24,
        padding: 24,
    },
    image: {
        flex: 'none',
        borderRadius: 6,
        backgroundColor: 'rgb(241 245 249)',
    },
    title: {
        fontWeight: '600px',
        color: 'rgb(15 23 42)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        paddingRight: 80,
    },
    dl: {
        marginTop: 8,
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '500px',
    },
    desc: {
        //  flex-none w-full mt-2 font-normal
        flex: 'none',
        width: '100%',
        marginTop: 8,
        fontWeight: '400px',
    },
});

export default styles;