import React from 'react'
import { StyleSheet, View} from 'react-native';
import { TextInput, } from 'react-native-gesture-handler';
import DropdownMenus from '../../Components/DropdownMenus';
import UsersTable from '../../Components/UsersTable';

export default class AdminManageStudentsAccountsScreen extends React.Component{
  
  state={
    attributes: [' St_Name', 'Grades'],
    studentsBasicData: [
      ['asdfg', 'Excellent'],
      ['axdrew', 'Excellent'],
      ['jygvf', 'Excellent'],
      ['xcvgtgvfd', 'Excellent'],
      ['ryhfcnj', 'Excellent'],
      ['efyvuw', 'Excellent'],
      ['wbvhekfwku', 'Excellent'],
      ['ewbrefvwe', 'Excellent'],
      ['etnebwre', 'Excellent'],
      ['wrnetbgdv', 'Excellent'],
      ['asvfghtrtgfd', 'Excellent'],
      ['ehtrgvfeeg', 'Excellent'],
      ['ymrtndgbf', 'Excellent'],
      ['sdvfthgf', 'Excellent'],
      ['bgfdfgfdrtyj', 'Excellent'],
      ['sfvreuyjtrd', 'Excellent'],
      ['rhnrtbdgvfd', 'Excellent'],
      ['htentbgrdvc', 'Excellent'],
      ['gtwgefvsad', 'Excellent'],
      ['vewdasxa', 'Excellent'],
      ['zsertgvcds', 'Excellent'],
      ['asdfewvfscx', 'Excellent'],
      ['jtrhbdgf', 'Excellent'],
      ['eyrbgsfvdc', 'Excellent'],
    ],

    studentsShownData: [
      ['asdfg', 'Excellent'],
      ['axdrew', 'Excellent'],
      ['jygvf', 'Excellent'],
      ['xcvgtgvfd', 'Excellent'],
      ['ryhfcnj', 'Excelent'],
      ['efyvuw', 'Excellent'],
      ['wbvhekfwku', 'Excellent'],
      ['ewbrefvwe', 'Excellent'],
      ['etnebwre', 'Excellent'],
      ['wrnetbgdv', 'Excellent'],
      ['asvfghtrtgfd', 'Excellent'],
      ['ehtrgvfeeg', 'Excellent'],
      ['ymrtndgbf', 'Excellent'],
      ['sdvfthgf', 'Excellent'],
      ['bgfdfgfdrtyj', 'Excellent'],
      ['sfvreuyjtrd', 'Excellent'],
      ['rhnrtbdgvfd', 'Excellent'],
      ['htentbgrdvc', 'Excellent'],
      ['gtwgefvsad', 'Excellent'],
      ['vewdasxa', 'Excellent'],
      ['zsertgvcds', 'Excellent'],
      ['asdfewvfscx', 'Excellent'],
      ['jtrhbdgf', 'Excellent'],
      ['eyrbgsfvdc', 'Excellent'],
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
      <View style={styles.container}>
        <View style={styles.fixedView}>
          <TextInput 
            placeholder={'Search'}
            onChangeText={this.handleSearch}
            style={styles.searchBox}
          />
          <DropdownMenus />
        </View>
        
        <UsersTable 
          userType={'Student'}
          attributes={this.state.attributes} 
          usersShownData={this.state.studentsShownData} 
          //navigation={this.props.navigation} 
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
