
import { StyleSheet, View, } from 'react-native';


export default function App() {

  const handlePress = () => {
    console.log('text clicked')
  }
  return (
    <View style={styles.container}>
      {/* flexBasis the basis would be the sibling component */}
      {/* flexGrow = takes the remaining space */}
      {/* flexShrink = component shrinks when sibling components have no space for themselves. that component despite its height or width property will shrink */}

      <View style={{ flexDirection: "row", marginBottom: 20}}>
        <View style={{ backgroundColor: 'blue', width: 100, height: 100, }} />
        <View style={{ backgroundColor: 'gold', flexBasis: 100, height: 100,flexGrow: 1 }} />
        <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
      </View>

      <View style={{  flexDirection: "row" }}>
        {/* this component has more than enough of its size so there is an overflow with the siblings. use flexShrink to prevent this */}
        <View style={{ backgroundColor: 'blue', width: 400, 
        height: 100, flexShrink: 1 }} />
        <View style={{ backgroundColor: 'gold', flexBasis: 100, height: 100 }} />
        <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
      </View>



    </View>
  );
}

// alignContent= for the whole content inside the view or container ;for wrapping 
// vs alignItems = for each line
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,

    justifyContent: "center",
    // alignContent: "center",
    // alignItems: "center",
  },
});
