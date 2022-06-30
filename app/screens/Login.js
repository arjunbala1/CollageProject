import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput,Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const handleLogin = () => {
    if (emailId) {
      if (password) {
        auth()
          .signInWithEmailAndPassword(emailId, password)
          .then(() => {
            setIndicator(false);
            setEmailId('');
            setPassword('');
            navigation.navigate('TabNav');
          })
          .catch(error => {
            alert('Error: ', error);
            setIndicator(false);
          });
      } else {
        alert('Please Enter your Password to Login');
        setIndicator(false);
      }
    } else if (password) {
      alert('Please Enter your Email Id to Login');
      setIndicator(false);
    } else {
      alert('Please Enter your Email id and Password to Login');
      setIndicator(false);
    }
  };
  const [emailId, setEmailId] = React.useState();
  const [password, setPassword] = React.useState();
  const [indicator, setIndicator] = React.useState(false);
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Text style={styles.Welcome}>Welcome Again...</Text>

      <TextInput
        theme={{roundness: 25, colors: {text: '#fff'}}}
        style={styles.InputFiled}
        placeholder="Enter your email"
        placeholderTextColor="#363636"
        activeOutlineColor={'#8a54ff'}
        mode={'outlined'}
        selectionColor={'#8a54ff'}
        value={emailId}
        onChangeText={text => setEmailId(text)}
      />
      <TextInput
        theme={{roundness: 25, colors: {text: '#fff'}}}
        style={styles.InputFiled}
        placeholder="Enter your password"
        placeholderTextColor="#363636"
        activeOutlineColor={'#8a54ff'}
        mode={'outlined'}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Text style={styles.forgotpassword}>forgot password</Text>
{/* 
      <TouchableOpacity
        style={styles.Button}
        onPress={() => handleLogin()}>
        <Text style={styles.ButtonText}>Login</Text>
      </TouchableOpacity> */}
       <Button
          loading={indicator}
          mode="contained"
          color="green"
          style={styles.Button}
          onPress={() => {
            setIndicator(true);
            handleLogin();
          }}>
          Login
        </Button>

      <Text onPress={()=>navigation.navigate("Signup")} style={styles.DontHavAcc}>Don't have an account</Text>
    </SafeAreaView>
  );
};

export default Login;

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
    top: '30%',
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'sans-serif-light',
    backgroundColor: '#1a1a1a',
    padding: 5,
  },
  Button: {
    width: '80%',
    height: 50,
    backgroundColor: '#8a54ff',
    top: '35%',
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
