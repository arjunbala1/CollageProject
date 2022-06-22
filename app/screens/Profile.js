import {StyleSheet,Text,SafeAreaView,Image,StatusBar,TouchableOpacity,View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const BackGround = '#1a1a1a';
const InputBack = '#212121';
const ProfileBorder = '#00ff66';
const white = '#fff';

const Profile = () => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      {/* <AntDesign
        name="arrowleft"
        size={30}
        color={white}
        style={{position: 'absolute', left: 0}}
      /> */}
      <StatusBar backgroundColor={BackGround} />

      <Text style={styles.logout}>Profile</Text>

      <View style={styles.Details}>
        <IonIcon name="person" size={20} color={'grey'} />
        <Text style={styles.Identify}>Rahul Das</Text>
      </View>
      <View style={styles.Details}>
        <IonIcon name="md-at-circle" size={20} color={'grey'} />
        <Text style={styles.Identify}>abc@gmail.com</Text>
      </View>
      <View style={styles.Details}>
        <FontAwsome name="phone-square" size={20} color={'grey'} />
        <Text style={styles.Identify}>9061070720</Text>
      </View>
      

      <Image
        source={require('../assets/def_profile.png')}
        style={styles.ProfileIMageContainer}
      />

      <TouchableOpacity style={styles.LogoutButton}>
        <Text style={styles.logoutText}>logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: BackGround,
    alignItems: 'center',
  },
  ProfileIMageContainer: {
    width: 120,
    height: 120,
    position: 'absolute',
    borderWidth: 5,
    borderColor: ProfileBorder,
    top: '10%',
    shadowColor: '#fff',
    borderRadius: 90,
  },
  Identify: {
    color: white,
    margin: 3,
    fontSize: 20,
    marginLeft: 15,
    fontFamily:"sans-serif-light"
  },
  logoutText: {
    color: white,
    fontFamily:"sans-serif-light",
    fontWeight:'800'
  },
  Details: {
    flexDirection: 'row',
    width: '85%',
    height: '8%',
    backgroundColor: InputBack,
    borderRadius: 20,
    padding: 3,
    fontSize: 20,
    marginBottom: 18,
    color: white,
    paddingStart: 10,
    elevation: 3,
    alignItems: 'center',
    top: '55%',
    shadowColor: 'grey',
  },
  logout: {
    color: '#fff',
    fontWeight: '300',
    fontFamily: 'sans-serif-light',
    fontSize: 25,
    alignSelf: 'center',
  },
  LogoutButton: {
    width: '30%',
    height: '5%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    top: '56%',
    left: '24%',
  },
});
