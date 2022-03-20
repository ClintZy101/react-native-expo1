import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>

        <Image 
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/beach1.jpg')}>

        </Image>
        </View>
    )
}

// Next: learn how to make styles components for easy reuse

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: "100%"
    },
    container:{
        backgroundColor: colors.black,
        flex:1
    },
    closeIcon: {
        backgroundColor: colors.primary ,
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        left:30
    },
    deleteIcon: {
        backgroundColor: colors.secondary,
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        right:30
    },
})
