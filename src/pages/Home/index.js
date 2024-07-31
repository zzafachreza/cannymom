import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking, BackHandler } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'moment/locale/id';
import { MyGap, MyHeader } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import MyMenu from '../../components/MyMenu';

export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [carouselData, setCarouselData] = useState([
    {
      id: '1',
      image: require('../../assets/carousel1.png'),
    },
    {
      id: '2',
      image: require('../../assets/carousel2.png'),
    },
  ]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});
  const carouselRef = useRef(null);

  const _getTransaction = async () => {
    await getData('user').then(u => {
      setUser(u);
    });

    await axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    });
  }

  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const _renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => Alert.alert('Info', 'Anda mengklik gambar')}>
        <View style={styles.carouselItem}>
          <Image source={item.image} style={styles.carouselImage} />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <ImageBackground source={require('../../assets/bghome.png')} style={{ flex: 1, width: "100%", height: "100%" }}>
   

      <ScrollView>
        
    <View style={{padding:20, flexDirection:"row", justifyContent:"space-between", top: -20}}>

<View style={{justifyContent:'center'}}>
  <Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.white}}>Selamat Datang{'\n'}
  Canny Mom</Text>
</View>

<View>
  <Image style={{height:110, width:110}} source={require('../../assets/logo.png')}/>
</View>

</View>

        <View style={{ padding: 10 , alignContent:'center', alignItems:'center', top: -50}}>
          {/* DISINI BAUTKAN ONE SLDIER */}
         <Image style={{width:331, height:190}} source={require('../../assets/sliderdummy.png')}/>
          {/* END ONE SLDIER */}
        </View>

        {/* MENU */}
        <View style={{padding:20, top: -50}}>

        <View style={{}}>

        {/* ARTIKEL */}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('AlarmObat')}>
          <View  style={{padding:10, backgroundColor:colors.primary, borderRadius:10, flexDirection:"row",
          justifyContent:"space-evenly", borderBottomWidth:0.60,}}>

          <View style={{left:-35}}>
            <Image style={{height:84, width:84}} source={require('../../assets/artikel.png')}/>
          </View>

          <View style={{justifyContent:'center', left:-60}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32, color:colors.tekscolor}}>Artikel</Text>
          </View>

          </View> 
        </TouchableWithoutFeedback>

    <MyGap jarak={30}/>

            {/* KALENDAR */}
            <TouchableWithoutFeedback onPress={() => navigation.navigate('AlarmObat')}>
          <View  style={{padding:10, backgroundColor:colors.primary, borderRadius:10, flexDirection:"row",
          justifyContent:"space-evenly", borderBottomWidth:0.60,}}>

          <View style={{left:-10}}>
            <Image style={{height:84, width:84}} source={require('../../assets/ceklis.png')}/>
          </View>

          <View style={{justifyContent:'center', left:-10}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32, color:colors.tekscolor}}>Kalendar &{'\n'}Checklist</Text>
          </View>

          </View> 
        </TouchableWithoutFeedback>

     
        </View>

      
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: windowHeight / 4, // Adjusted height for carousel item
  },
  carouselImage: {
    width: '100%',
    height: '100%', // Adjusted height for image
    resizeMode: 'contain',
  }
});
