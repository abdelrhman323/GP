import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'

function AddEvents({ navigation }) {
    const [EventTitle, setEventTitle] = useState('')
    const [EventDescription, setEventDescription] = useState('')
    const [EventDate, setEventDate] = useState('')

    function onSaveEvent() {
        navigation.state.params.addEvent({ EventTitle, EventDescription,EventDate})
        navigation.goBack()
    }

    return (
        <>
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            />

            <View style={styles.container}>
                <TextInput
                    label="Add Event Title"
                    value={EventTitle}
                    mode='outlined'
                    onChangeText={setEventTitle}
                    style={styles.text}
                />
                  <TextInput
                    placeholder='hh:mm DD-MM-YYYY'
                    label="Add Event Date"
                    value={EventDate}
                    mode='outlined'
                    onChangeText={setEventDate}
                    style={styles.text}
                />
                <TextInput
                    label="Add Event Description"
                    value={EventDescription}
                    onChangeText={setEventDescription}
                    mode="flat"
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={EventTitle == '' ? true : false}
                    onPress={() => onSaveEvent()}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        fontSize: 24,
        marginBottom: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#219653'
    }

})

export default AddEvents