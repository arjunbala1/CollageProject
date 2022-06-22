import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Image,Dimensions} from 'react-native';
import React,{useState} from 'react';
import DropDown from 'react-native-paper-dropdown';
import { Provider,Button } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { data } from '../datas/LocationData';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  const genderList = [
    {
      label: "500",
      value: "500",
    },
    {
      label: "1000",
      value: "1000",
    },
    {
      label: "1500",
      value: "1500",
    },
    {
      label: "2000",
      value: "2000",
    },
    {
      label: "500",
      value: "500",
    },
    {
      label: "1000",
      value: "1000",
    },
    {
      label: "1500",
      value: "1500",
    },
    {
      label: "2000",
      value: "2000",
    }
  ]
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState( "");
  _renderItem = ({item, index}) => {
    return (
        <View style={{justifyContent:"center",alignItems:"center"}}>
                   <Image source={item.Img} style={{height:"75%",width:"90%",borderRadius:10}}/>
        </View>
    );
}
  return (
    <Provider>
    <SafeAreaView style={styles.MainContainer}>
      <Text style={styles.Welcome}> Hey Pal!</Text>
     


      <Carousel
              // ref={(c) => { this._carousel = c; }}
              data={data}
              renderItem={_renderItem}
               sliderWidth={windowWidth}
               itemWidth={windowWidth}  
               sliderHeight={100}   
           autoplay={true}     
            />
               
      <Text style={styles.SelectBudget}>Select your Budget</Text>
      
     
            <DropDown
            
              label={"Price"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={gender}
              setValue={setGender}
              list={genderList}
              dropDownStyle={{
                width:"95%",
              }}
              
              
            />
            <View style={styles.spacerStyle} />
          
            <Button  mode="outlined" onPress={()=>navigation.navigate("Suggested")}>
    Show Locations
  </Button>
            </SafeAreaView>
   
    </Provider>
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
    marginTop: '5%',
    left: '1%',
    marginBottom:"10%"
  },
  Card: {
    width: '60%',
    height: '40%',
    top: '20%',
  },
  SelectBudget:{
    color: '#fff',
    fontSize: 24,
    fontFamily: 'sans-serif-light',
    marginTop: '0%',
    left: '5%',
    marginBottom:15
  },
  CardImage:{
    position:"absolute",
    height:"100%",
    width:"39%",
    left:4,
    borderRadius:20,
  },
});
