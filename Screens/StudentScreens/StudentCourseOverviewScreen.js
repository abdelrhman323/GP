import React from 'react'
import { View ,FlatList,Text,Image,StyleSheet,ScrollView} from 'react-native';
import Colors from '../../Constants/colors';



export default class StudentCourseOverviewScreen extends React.Component{
  state={
      noOfWeeks:0,
      noOfHours:0,
      ProfName:'****',
      skillsGained: [
        {
          skill: 'First Item',
        },
        {
          skill: 'Second Item',
        },
        {
          skill: 'Third Item',
        },
      ],
      over_text:'Welcome to Learning to Learn! By accessing this course you have just taken a major step toward helping you develop your study skills—congratulations! To get started you need to read the course overview.'
  }

  render(){
    const Item = ({ skill }) => (
      <View style={styles.item}>
        <Text style={styles.skill}>{skill}</Text>
      </View>
    );
    const renderItem = ({ item }) => (
      <Item skill={item.skill} />
    );
    const SkillG=this.state.skillsGained
    return(
      <ScrollView>
      <View style={{flex: 1, backgroundColor: 'white'}}>
       <Image source={require('../../assets/y165_1_front.png')} style={{flex: 1,
    resizeMode: 'cover', width: '100%', height: 150,position:'relative'}}></Image>
       <View style={styles.container1}>
        <Text style={styles.overview}>
        {this.state.over_text}
        </Text>
          <Text style={styles.sk}>Skill Gained:</Text>

          <FlatList
        data={SkillG}
        renderItem={renderItem}
        keyExtractor={item => item.skill}
      />
        </View>
        <View style={styles.container}>
        <Text style={styles.title}>Total Weeks: {this.state.noOfWeeks}</Text>
        <Text style={styles.title}>Takes: {this.state.noOfHours} - {parseInt(this.state.noOfHours)+3}hours/week</Text>
        <Text style={styles.title}>Prof: {this.state.ProfName}</Text>
        </View>
      </View>
      </ScrollView >
    );
  }
}
const styles = StyleSheet.create({  
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
},
container1: {
 padding:4,
 textAlign:'left',
 marginTop:20

},
  overview: {
      fontSize: 20,
      color: Colors.secondary_color,
      fontWeight: 'bold',
      marginBottom: 40,
      marginLeft: 40,
      textAlign:'left'
  },
  title:{
    fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 7,
      backgroundColor:'grey',
      padding:4,
      width:250,
      textAlign:'left',
      position:'relative'
  },
  sk:{
    fontSize:24,
    color:'#335366',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 40,

  },
  skills:{
    fontSize:25,
    color:'#26355e',
    fontWeight: 'bold',
    paddingBottom:10,
    marginBottom: 10,
    marginLeft: 60,
  },
  item: {
    backgroundColor: '#0c416d',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
});
