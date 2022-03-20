
import { StyleSheet, View, } from 'react-native';


export default function App() {

  const handlePress = () => {
    console.log('text clicked')
  }
  return (
    <View style={styles.container}>
      {/* This setup will divide the screen into four like how you deal with grid cols */}
      {/* <View style={{ backgroundColor: 'blue', flex: 2}}/>
      <View style={{ backgroundColor: 'gold', flex: 1}}/>
      <View style={{ backgroundColor: 'tomato', flex: 1}}/> */}

      {/* align individual with alignSelf: "flexStart" */}
      <View style={{ backgroundColor: 'blue', width: 100, height: 300, }} />
      <View style={{ backgroundColor: 'gold', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'grey', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'greenyellow', width: 100, height: 100 }} />

    </View>
  );
}

// alignContent= for the whole content inside the view or container ;for wrapping 
// vs alignItems = for each line
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: 'wrap'
  },
});
