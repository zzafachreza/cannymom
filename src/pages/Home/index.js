import { Alert, StyleSheet, Text, View, Modal, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking, BackHandler, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'moment/locale/id';
import { MyButton, MyGap, MyHeader } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import MyMenu from '../../components/MyMenu';
import { Icon } from 'react-native-elements';

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
  const [modalVisible, setModalVisible] = useState(false);
  const _getTransaction = async () => {
    await getData('user').then(u => {
      setUser(u);
      console.log(u)
      if (u.nifas_ke >= 60) {
        setModalVisible(true)
      }
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

        <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-between", top: 0 }}>

          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 20, color: colors.white }}>Selamat Datang{'\n'}
              Canny Mom</Text>
          </View>

          <View>
            <Image style={{ height: 51, width: 34 }} source={require('../../assets/logohome.png')} />
          </View>

        </View>

        <View style={{ padding: 10, alignContent: 'center', alignItems: 'center', top: 0 }}>

          <Image style={{ width: 331, height: 190 }} source={require('../../assets/sliderdummy.png')} />

        </View>

        {/* MENU */}
        <View style={{ padding: 20, top: 0 }}>
          <View style={{}}>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('KalendardanCkehlist')}>
              <View style={{
                padding: 10, backgroundColor: colors.primary, borderRadius: 10, flexDirection: "row",
                justifyContent: "space-evenly", borderBottomWidth: 0.60,
              }}>

                <View style={{ left: -10 }}>
                  <Image style={{ height: 84, width: 84 }} source={require('../../assets/ceklis.png')} />
                </View>

                <View style={{ justifyContent: 'center', left: -10 }}>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 32, color: colors.white }}>Jadwal &{'\n'}Checklist</Text>
                </View>

              </View>
            </TouchableWithoutFeedback>


            <MyGap jarak={30} />

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Artikel')}>
              <View style={{
                padding: 10, backgroundColor: colors.primary, borderRadius: 10, flexDirection: "row",
                justifyContent: "space-evenly", borderBottomWidth: 0.60,
              }}>

                <View style={{ left: -15 }}>
                  <Image style={{ height: 84, width: 84 }} source={require('../../assets/artikel.png')} />
                </View>

                <View style={{ justifyContent: 'center', left: -20 }}>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 32, color: colors.white }}>Wawasan</Text>
                </View>

              </View>
            </TouchableWithoutFeedback>

            <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-around', marginTop: 20 }}>
              <View>
                <Text style={{ fontFamily: fonts.primary[400], }}>Rujukan dari: </Text>
              </View>

              <View>
                <Image style={{ width: 89, height: 23 }} source={require('../../assets/kemeskes.png')} />
              </View>

              <View>
                <Image style={{ width: 49, height: 25 }} source={require('../../assets/bacaan.png')} />
              </View>
            </View>

          </View>


        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{
          flex: 1,
          backgroundColor: '#00000081',
          justifyContent: 'center'
        }}>
          <View style={{
            margin: 20,
            borderRadius: 12,
            height: windowHeight / 2,
            padding: 10,
            backgroundColor: colors.white
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <Text style={{
                fontFamily: fonts.primary[600],
                fontSize: 20,
                flex: 1,
              }}>Informasi Nifas</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{
                padding: 10,
              }}>
                <Icon type='ionicon' name='close' />
              </TouchableOpacity>
            </View>
            <View style={{
              flex: 1, justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontFamily: fonts.primary[600],
                fontSize: 24,
                color: colors.primary,

                textAlign: 'center'
              }}>Darah Istihadhoh (mustahadhoh fi nifas)</Text>
            </View>
            <MyButton onPress={() => {
              axios.post(apiURL + 'update_info_nifas', {
                id: user.id,
              }).then(res => {
                console.log(res.data);
                setModalVisible(false);
                storeData('user', res.data.data)
              })
            }} title="Tutup dan hilangkan pemberitahuan" />
          </View>
        </View>
      </Modal>
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
