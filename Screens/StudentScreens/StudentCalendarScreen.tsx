import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';

type Item = {
  name: string;
  cookies: boolean;
};

const StudentCalendarScreen: React.FC = () => {
  const [items, setItems] = useState<{[key: string]: Item[]}>({
    "2021-05-02": [{
        name: "Quiz1",
       cookies:true
      },
    {
      name:'Assignment1',
      cookies:true
    }
    ],
    "2021-05-03": [{
      name: "Lecture Image Processing",
     cookies:true
    },
  {
    name:'Section Multimedia',
    cookies:false
  }
  ]
  });
  

  const renderItem = (item: Item) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.cookies ? `Available` : `Not Yet`}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Agenda items={items} 
              renderItem={(item) => {
                return renderItem(item);
              }}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default StudentCalendarScreen;