import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const BackGround = '#1a1a1a';

import { data } from '../datas/LocationData';


const Favourite = () => {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <StatusBar backgroundColor={BackGround} />

      <View style={styles.Header}>
        <AntDesign
          name="arrowleft"
          size={30}
          color={'#fff'}
          style={{position: 'absolute', left: 5}}
        />
        <Text style={styles.SelectedTxt}>Selected Location</Text>
        <Octicons
          name="trash"
          size={28}
          color={'#fff'}
          style={{position: 'absolute', left: 300}}
        />
        <Ionicons
          onPress={() => console.log('options Pressed')}
          name="md-ellipsis-vertical-sharp"
          size={28}
          color={'#fff'}
          style={{position: 'absolute', left: 360}}
        />
      </View>
    
        <FlatList
        style={styles.FlatList}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.card}>
               
                <Image source={item.Img} style={styles.CardImage}/>
              
                <View style={styles.Description}>
                  <Text numberOfLines={7} style={styles.DescriptionText}>{item.Description}</Text>
                </View>
                <Ionicons name='md-bookmark' color={"yellow"} size={15} style={styles.bookmark}/>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
     
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: BackGround,
  },
  Header: {
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SelectedTxt: {
    color: '#fff',
    left: 50,
    fontFamily: 'sans-serif-light',
    fontSize: 24,
  },
  modal: {
    width: 20,
    height: 20,
  },
  card: {
    width: '95%',
    height: 120,
    marginBottom:20,
    borderRadius:20,
    backgroundColor: '#4a4a4a',
    alignSelf:"center",
    flexDirection: 'row',
    padding:4,
    justifyContent:"space-around",
    alignItems:"center",
  },
  FlatList: {
    top: '1%',
    width: '100%',
    
  },
  CardImage:{
    position:"absolute",
    height:"100%",
    width:"39%",
    left:4,
    borderRadius:20,
  },
  Description:{
    width:"59%",
    height:"100%",
   borderRadius:20,
    position:"absolute",
    backgroundColor:"#000",
    right:4,
    padding:8
  },
  DescriptionText:{
    color:"white",
    fontFamily: 'sans-serif-light',
    fontSize:16
  },
  bookmark:{
    
    top:"-15%",
    left:145

  }
});
