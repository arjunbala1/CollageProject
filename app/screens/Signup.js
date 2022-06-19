import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text style={styles.Welcome}>Join Us..</Text>

      <TextInput
        theme={{roundness: 25, colors: {text: '#fff'}}}
        style={styles.InputFiled}
        placeholder="Full Name"
        placeholderTextColor="#363636"
        activeOutlineColor={'#8a54ff'}
        mode={'outlined'}
        selectionColor={'#8a54ff'}
      />
      <TextInput
        theme={{roundness: 25, colors: {text: '#fff'}}}
        style={styles.InputFiled}
        placeholder="Phone Number"
        placeholderTextColor="#363636"
        activeOutlineColor={'#8a54ff'}
        mode={'outlined'}
      />
      <TextInput
        theme={{roundness: 25, colors: {text: '#fff'}}}
        style={styles.InputFiled}
        placeholder="Mail Id"
        placeholderTextColor="#363636"
        activeOutlineColor={'#8a54ff'}
        mode={'outlined'}
      />
      <TextInput
        theme={{roundness: 25, colors: {text: '#fff'}}}
        style={styles.InputFiled}
        placeholder="Enter your password"
        placeholderTextColor="#363636"
        activeOutlineColor={'#8a54ff'}
        mode={'outlined'}
      />

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.ButtonText}>Sign up</Text>
      </TouchableOpacity>

      <Text onPress={()=>navigation.navigate("Signup")} style={styles.DontHavAcc}>Don't have an account</Text>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
  },
  Welcome: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'sans-serif-light',
    marginTop: '20%',
    right: '15%',
  },
  InputFiled: {
    color: '#fff',
    width: '80%',
    height: 50,
    top: '14%',
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'sans-serif-light',
    backgroundColor: '#1a1a1a',
    padding: 5,
  },
  Button: {
    width: '80%',
    height: 50,
    backgroundColor: '#8a54ff',
    top: '15%',
    marginBottom: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'sans-serif-light',
  },
  forgotpassword: {
    color: '#fff',
    top: '31%',
    color: '#8a54ff',
  },
  DontHavAcc:{
    color: '#fff',
    top: '35%',

  }
});
