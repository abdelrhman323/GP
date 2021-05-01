import React from 'react'
import { StyleSheet, View} from 'react-native';
import UsersTable from '../../Components/UsersTable';

export default class AdminManageStudentsAccountsScreen extends React.Component{
  
  state={
    attributes: ['Quiz', 'Grades'],
    studentsShownData: [
      ['Quiz1', '      8'],
      ['Quiz2', '      9'],
      ['Quiz3', '      8'],
      ['Quiz4', '      6'],
      ['Quiz5', '      10'],
    ],
  }

  componentDidMount(){
    this.setState({studentsShownData: [...this.state.studentsShownData.sort()]})
  }

  handleSearch = input => {
    if(input === ''){
      this.setState({
        studentsShownData: this.state.studentsBasicData
      })
    } else{
      this.setState({
        studentsShownData: this.state.studentsBasicData.filter(function(item) {return !item[0].indexOf(input)})
      })
    }
  }

  render(){

    return(
    <View>    
        <UsersTable 
          userType={'Student'}
          attributes={this.state.attributes} 
          usersShownData={this.state.studentsShownData} 
        />
    </View>    
    );
  }
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  fixedView: {marginBottom: 20},
  searchBox: {alignSelf: 'center', marginBottom: 16, borderBottomWidth: 1, width: '90%', paddingLeft: 8},
});
