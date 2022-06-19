import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const BackGround = '#1a1a1a';

import Munnar from "../assets/munnar.jpg"
import bekal from "../assets/bekal.jpg"
import athirapally from "../assets/athirapally.jpg"
import thekkady from "../assets/thekkady.jpg"
import varkala from "../assets/varkala.jpg"

const data = [
  {
    id: 1,
    name: 'Munnar',
    Description:"Munnar needs no introduction to the seasoned traveller. The most favoured destination in Kerala, Munnar is situated at a height of 1600mts above sea level. Located in Idukki district, it is a slice of heaven with endless tea gardens, winding narrow lanes between the mist covered mountains and the spice scented fresh air."
    ,Img:Munnar
  } ,
  {
    id: 2,
    name: 'Ponmudy',
    Description:"Known for being home to the country’s largest Tiger Reserve, Thekkady is one of the most sought after jungle vacation destinations in Kerala. Located near the Kerala – Tamilnadu border in Idukki district, Thekkady is frequented by domestic and international tourists alike."
    ,Img:thekkady
  },
  {
    id:3,
    name:"Bekal",
    Description:"Bekal,a small town in Kasaragod district,is not just a known tourist location of the state but also a land with many stories of the past. The ancient fort, extensive beaches, numerous estuaries all set in the rich cultural backdrop, attracts tourists and travelers alike."
  ,Img:bekal
  },
  {
    id:4,
    name:"Athirapally",
    Description:"Located near Chalakudy, Athirappilly is a village famous for the Athirappilly waterfalls.It is situated at 1000 feet above sea level on the Chalakudy river,with the falls itself of a height of 80 feet. Nicknamed the Niagara of India, these are the largest waterfalls in Kerala. Just 5kms away from from Athirappilly waterfalls are the Vazhachal waterfalls."
  ,Img:athirapally
  },
  {
    id:5,
    name:"Varkala",
    Description:"Varkala, situated in the outskirts of Trivandrum town is a calm and peaceful hamlet with several tourist attractions including the Varkala beach, the 2000- year old Vishnu temple and the Sivagiri Mutt ashram."
  ,Img:varkala
  }
];


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
