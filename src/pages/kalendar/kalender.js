import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyCalendar, MyGap, MyHeader } from '../../components';
import moment from 'moment';

export default function KalendarJadwal({ navigation }) {

  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader onPress={handleBack} judul="Kalender" />
      <ScrollView  contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F5FCFF' }}>
        <View style={{padding:20}}>

      <View>
     
        <TouchableNativeFeedback onPress={() =>  navigation.navigate("PemantauanHPL")}>
          <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, }}>
          <Text style={{fontFamily:fonts.primary[600], textAlign:'center', fontSize:28, }}>Pemantauan HPL</Text>
          </View>

        </TouchableNativeFeedback>
      </View>
    <MyGap jarak={20}/>
    <View>
        <TouchableNativeFeedback onPress={() => navigation.navigate("PemantauanNifas")}>
          <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, }}>
          <Text style={{fontFamily:fonts.primary[600], textAlign:'center', fontSize:28, }}>Pemantauan Nifas</Text>
          </View>

        </TouchableNativeFeedback>
      </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
