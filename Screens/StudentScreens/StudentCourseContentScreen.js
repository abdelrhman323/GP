import React from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { TextInput, } from 'react-native-gesture-handler';
import DropdownMenus from '../../Components/DropdownMenus';
import UsersTable from '../../Components/UsersTable';


 
export default class AdminManageStudentsAccountsScreen extends React.Component{
  
  state={
    attributes: ['Week', 'Work',],
    studentsBasicData: [
      ['Week1', 'Lesson1'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment1'],
      ['Week2', 'Lesson2'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment2'],
      ['Week3', 'Lesson3'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment3'],
      ['Week4', 'Lesson4'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment4'],
      ['Week5', 'Lesson5'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment5'],
      ['Week6', 'Lesson6'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment6'],
      ['Week7', 'Lesson7'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment7'],
      ['Week8', 'Lesson8'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment8'],
      ['Week9', 'Lesson9'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment9'],
      ['Week10', 'Lesson10'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment10'],
      ['Week11', 'Lesson11'],
      ['Practices::','two Quizes' ],
      ['Assignments:', 'Assingnment11'],
      ['Week12', 'Lesson12'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment12'],
      ['Week13', 'Lesson13'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment13'],
    ],
  
    studentsShownData: [
      ['Week1', 'Lesson1'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment1'],
      ['Week2', 'Lesson2'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment2'],
      ['Week3', 'Lesson3'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment3'],
      ['Week4', 'Lesson4'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment4'],
      ['Week5', 'Lesson5'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment5'],
      ['Week6', 'Lesson6'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment6'],
      ['Week7', 'Lesson7'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment7'],
      ['Week8', 'Lesson8'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment8'],
      ['Week9', 'Lesson9'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment9'],
      ['Week10', 'Lesson10'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment10'],
      ['Week11', 'Lesson11'],
      ['Practices::','two Quizes' ],
      ['Assignments:', 'Assingnment11'],
      ['Week12', 'Lesson12'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment12'],
      ['Week13', 'Lesson13'],
      ['Practices:','two Quizes' ],
      ['Assignments:', 'Assingnment13'],
    ]
};


  render(){

    return(        
        <UsersTable 
          userType={'Student'}
          attributes={this.state.attributes} 
          usersShownData={this.state.studentsShownData} 
          navigation={this.props.navigation} 
        />
    );
  }
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  fixedView: {marginBottom: 20},
  
});
