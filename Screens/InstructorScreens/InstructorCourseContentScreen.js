import React from 'react'
import { View } from 'react-native';

export default class InstructorCourseOverviewScreen extends React.Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#28f'}}>
        <UsersTable 
          userType={'Lessons'}
          attributes={this.state.attributes} 
          usersShownData={this.state.studentsShownData} 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}