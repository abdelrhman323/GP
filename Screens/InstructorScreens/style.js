import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        backgroundColor: '#219653',
        position: 'relative',
        margin: 80,
        right: 0,
        bottom: 10
    },
    listTitle: {
        fontSize: 20,
        backgroundColor:'grey'
    },
    commonPadding: {padding: 24},
    greyBg: {backgroundColor: '#EFF3F6'},
    calendarScreen: {
        flex: 1
    },
    calendarTitle: {
        backgroundColor: 'white',
        fontSize: 30,
        color: '#8AC44C',
        padding: 17
    },
    eventList: {
        marginBottom: 18
    },
    event: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15
    },
    eventListTitle: {
        marginTop: 20,
        marginBottom: 15,
        color: 'black'
    },
    eventTimeWr: {
        borderRightWidth: 2,
        borderRightColor: '#8AC44C',
    },
    eventText: {
        paddingLeft: 8,
        flex: 1,
        justifyContent: 'center'
    },
    eventTime: {
        color: '#333333',
        fontSize: 22,
        paddingRight: 8
    },
    eventTitle: {
        fontSize: 20,
        color: 'black'
    },
    eventDescription: {
        fontSize: 14,
    }
});

export default styles;