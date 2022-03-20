
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
     console.log('text clicked')
  }
  return (
    <SafeAreaView style={styles.container}>
     
      <Text style={styles.text}> Hello Native! </Text>
      {/* <Image source={require("./public/somephoto.png")}/> */}
      
      <TouchableHighlight onPress={()=>console.log('image tapped')}>
      <Image style={styles.logo} source={{uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight>

      {/* ALert Button */}
      <Button title="Alert Button" color="green" onPress={()=>Alert.alert('My Title', 'My Message', [{text: 'Yes', onPress: ()=> console.log('Yes')}, {text: 'No', onPress: ()=> console.log('No')}])}/>

      {/* Prompt Button */}
      <Button title="Prompt Button" color="blue" onPress={()=>Alert.prompt('My Title', 'My Message', text => console.log(text))}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",

  },
  text :{
    marginBottom: 20
  },
  logo : {
    height: 400,
    width: 400,
   
  }
});
