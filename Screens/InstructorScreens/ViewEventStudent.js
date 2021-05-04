import React, {Component} from 'react';
import {ScrollView, View, Image} from 'react-native';
import {Calendar,Agenda} from 'react-native-calendars';
import styles from './style';
import EventComponent from './EventComponent';
import { Text, FAB, List } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { addevent } from '../../reducer/EventsApp'
import { FlatList } from 'react-native-gesture-handler';




function ViewEventStudent({ navigation }) {

 
    
    const Events = useSelector(state => state)
    const dispatch = useDispatch()

    const addEvent = Event => {
        console.log(Event)
        dispatch(addevent(Event))
    }
    
    
    
        return (
            <ScrollView style={[styles.greyBg, styles.commonPadding]}>
                <View style={styles.calendarScreen}>
                    <View>
                        <Text style={styles.calendarTitle}>Calender</Text>
                       
                        <Agenda
                            type={'gregorian'}
                            hideDayNames={false}
                                
                            renderArrow={(direction) => {
                                if (direction === 'left') {
                                    return <Image source={require('../../assets/left.png')}/>;
                                }

                                return <Image source={require('../../assets/right.png')}/>;
                            }}
                        />
                    </View>
                </View>
                
             <View style={styles.eventList}>
                <View style={styles.container}>
                {Events.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>You do not have any Events</Text>
                    </View>
                ) : (
                        <FlatList
                            data={Events}
                            renderItem={({ item }) => (
                                <List.Item
                                    title={item.Event.EventTitle}
                                    description={item.Event.EventDescription+'\n'+
                                        item.Event.EventDate}
                                    descriptionNumberOfLines={2}
                                    titleStyle={styles.listTitle}
                                    
                                />
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    )}

                </View>
                </View>
            </ScrollView>
        );
    
}
export default ViewEventStudent