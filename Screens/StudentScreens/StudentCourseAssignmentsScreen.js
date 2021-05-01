import React from 'react'
import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
      <ScrollView>
      <View style={{flex: 1, backgroundColor: '#9ed3e5'}}>
      <Image style={styles.img_over} source={require('../../assets/assignment.jpg')}/>  
        <Text style={{textAlign:'center',fontSize:36,color:'grey',marginTop:20 }}> Assignments</Text>
        <Text style={{textAlign:'center',fontSize:26,color:'#5e5757',paddingTop:40,paddingBottom:80 }}>Please Uplod Your Assingment in .Pdf Format</Text>     
        <View style={styles.container}>

                    
                    <TouchableOpacity activeOpacity={0.95} style={styles.button}
                    onPress={() => {this.setState({file: upload()})} 
                  }
                    >
                        <Image style={styles.img} source={require('../../assets/698394-icon-130-cloud-upload-512.png')}/>
                        <Text style={styles.text}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView> 
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#9ed3e5',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:50,
  },
  img_over:{
  width:410,
  height:300,
  },
  parent: {
    width: 300,
    height: 500,
    backgroundColor: 'red',
    margin: 50,
},
button: {
    flexDirection: 'row', 
    height: 50, 
    width:200,
    backgroundColor: '#206a87',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
},
text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#0f345b'
},
img:{
  width:50,
  height:50,
  marginRight:20,
}
});