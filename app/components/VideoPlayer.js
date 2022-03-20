
import { SafeAreaView, StyleSheet, StatusBar, Platform, View, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import ImageComponent from './components/ImageComponent'


export default function App() {
  // gets the dimension of the device screen
  // console.log(Dimensions.get('screen'))
  // using useDimensions is preferred
  // console.log(useDimensions())
  // console.log(useDeviceOrientation())
  const { landscape } = useDeviceOrientation();
  const handlePress = () => {
    console.log('text clicked')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: 'dodgerblue', width: '100%', height: landscape ? "100%" : '50%' }}>

      </View>
    </SafeAreaView>
  );
}

//  <View style = {[styles.container, containerStyle]} ><View/>
// containerStyle object will now overwrite the StyleSheet Api

// const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
