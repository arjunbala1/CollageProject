import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Icons from "react-native-vector-icons/AntDesign"

const Locations = () => {
  return (
    <SafeAreaView style={styles.MainContainer}>
        <Icons name='arrowleft' size={30} color={'white'} style={styles.back} />
        <View style={styles.suggestedspotContainer}>
            <Text style={styles.SuggestedSpot}>
                Suggested Spot based on your budget...
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default Locations

const styles = StyleSheet.create({
    MainContainer:{
        flex: 1,
        backgroundColor: '#0a0a0a',
    },
    back:{
        position: 'absolute', left: "2%",top: "2%",
    },
    suggestedspotContainer:{
        width: '80%',
    },
    SuggestedSpot:{
        color: '#fff',
        fontSize: 24,
        fontFamily: 'sans-serif-light',
        marginTop: '25%',
        left: '10%',
    }
})