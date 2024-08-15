import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton, MyGap } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { MYAPP, getData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';

export default function Splash({ navigation }) {

  const img = new Animated.Value(windowWidth / 0.3);
  const text = new Animated.Value(0);
  Animated.timing(img, {
    toValue: windowWidth / 0.9,
    duration: 750,
    useNativeDriver: false,
  }).start();

  Animated.timing(text, {
    toValue: windowHeight / 4.5,
    duration: 1000,
    useNativeDriver: false,
  }).start();

  useEffect(() => {
    setTimeout(() => {
      getData('user').then(res => {
        if (!res) {
          navigation.replace('Login');
        } else {
          // navigation.replace('GetStarted')
          navigation.replace('Home')
        }
      })
    }, 1200)
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 0,
      backgroundColor: colors.white,
      justifyContent: 'center',
      position: 'relative'

    }}>


      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white

      }}>
        <ImageBackground source={require('../../assets/bguntuksplash.png')} style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Animated.Image
            source={require('../../assets/logo.png')}
            resizeMode="contain"
            style={{
              width: 397,
              height: 397,

            }}
          />
          <Animated.Text style={{
            fontFamily: fonts.primary[600],
            fontSize: MyDimensi / 1.5,
            color: colors.loading,
            marginTop: 10,
            marginBottom: text,
            textAlign: 'center',
          }}>Aplikasi Kesehatan Ibu{'\n'}Berbasis Fiqih Kasyifatus Saja</Animated.Text>

          <ActivityIndicator style={{
            top: -120
          }} color={colors.loading} size="large" />
        </ImageBackground>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});