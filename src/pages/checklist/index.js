import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyHeader } from '../../components'
import { Image } from 'react-native'

export default function Checklist({navigation}) {
  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader onPress={handleBack} judul="Checklist"/>
   <ScrollView>
    <View style={{padding:10, }}>

    </View>
   </ScrollView>
   <TouchableNativeFeedback onPress={() => navigation.navigate("TambahCheklist")}>
    <View style={{flexDirection:'row', padding:20, justifyContent:'flex-end'}}>
        <View>
        <Image style={{width:63, height:57}} source={require("../../assets/plus.png")}/>
        </View>
    </View>
   </TouchableNativeFeedback>
    </View>
  )
}