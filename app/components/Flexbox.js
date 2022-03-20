
import {  StyleSheet, View,  } from 'react-native';


export default function App() {

  const handlePress = () => {
    console.log('text clicked')
  }
  return (
    <View style={styles.container, { flexDirection: "row", justifyContent: "center", alignItems: "center", flex: 1}}>
      {/* This setup will divide the screen into four like how you deal with grid cols */}
      {/* <View style={{ backgroundColor: 'blue', flex: 2}}/>
      <View style={{ backgroundColor: 'gold', flex: 1}}/>
      <View style={{ backgroundColor: 'tomato', flex: 1}}/> */}

{/* align individual with alignSelf: "flexStart" */}
      <View style={{ backgroundColor: 'blue', width: 100, height: 100, alignSelf:"flex-start"}}/>
      <View style={{ backgroundColor: 'gold', width: 100, height: 100}}/>
      <View style={{ backgroundColor: 'tomato', width: 100, height: 100}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flex: 1
  },
});
