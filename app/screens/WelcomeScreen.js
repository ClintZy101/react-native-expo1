import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

export default function WelcomeScreen() {
    const backgroundImg = require('../assets/wall.jpg')
    return (
        <ImageBackground
            style={styles.background}
            source={backgroundImg}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/fancy.png')} />
                <Text style={{fontSize: 20, color: '#fc5c65'}}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}>

            </View>

            <View style={styles.registerButton}>

            </View>

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        justifyContent: "center",
        alignItems:"center"
    }
})
