import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function WelcomeScreen() {
    // const backgroundImg = require('../assets/beach1.jpg')
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/beach1.jpg")}>

            {/* <Text>HEllo</Text> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1
    }
})
