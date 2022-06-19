import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';


const Home = () => {
  
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text style={styles.Welcome}> Hey Pal!</Text>
     
    </SafeAreaView>
  );
};


export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  Welcome: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'sans-serif-light',
    marginTop: '10%',
    left: '1%',
  },
  Card: {
    width: '60%',
    height: '40%',
    top: '20%',
  },
});
