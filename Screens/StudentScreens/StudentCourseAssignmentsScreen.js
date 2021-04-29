import React from 'react'
import { View,Text,Button,StyleSheet } from 'react-native';

async function upload() {
  const file = await DocumentPicker.getDocumentAsync()
  Toast.show(`${file.type}`, Toast.LONG)
  if(file.type === 'success'){
    return file
  }
  else{
    return {}
  }
}

export default class StudentCourseOverviewScreen extends React.Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text style={{textAlign:'center',fontSize:36,color:'black' }}> Assignments</Text>
        <Text style={{textAlign:'center',fontSize:26,color:'black',paddingTop:40,paddingBottom:80 }}>Please Uplod Your Assingment in .Pdf Format</Text>     
        <View style={styles.container}>
        <Button title='Upload' onPress={() => {this.setState({file: upload()})} 
            } style={{
              width:150,
              height:150,
              color:'red',     
            }}
            />
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});