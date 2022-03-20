
import { StyleSheet, View, } from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>

{/* All components by default are positioned relative */}
{/* If you state the individual's position to be absolute, the siblings will reposition */}

        <View style={{ backgroundColor: 'blue', width: 100, height: 100, top:20, left:20, position:"absolute" }} />
        <View style={{ backgroundColor: 'gold', flexBasis: 100, height: 100,  }} />
        <View style={{ backgroundColor: 'tomato', width: 100, height: 100, bottom: 50 }} />

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
    // alignContent: "center",
    alignItems: "center",
  },
});
