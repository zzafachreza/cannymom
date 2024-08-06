import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyGap, MyHeader, MyInput } from '../../components'
import { Image } from 'react-native'

export default function TambahChecklist({navigation}) {
    const handleBack = () => {
        navigation.goBack()
      }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader onPress={handleBack} judul="Checklist"/>
   <ScrollView>
    <View style={{padding:10, }}>

        <View style={{padding:10}}>
            <MyInput keyboardType="numeric" placeholder="Isi disini" label="Minggu ke-"/>
        </View>

        <View style={{padding:10}}>
            <TouchableNativeFeedback onPress={() => navigation.navigate("CheklistIbuHamil")}>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, }}>
                    <Text style={{fontFamily:fonts.primary[600], color:colors.primary, textAlign:'center', 
                    fontSize:20, }}>Ibu Hamil</Text>
                </View>
            </TouchableNativeFeedback>
                <MyGap jarak={20}/>
            <TouchableNativeFeedback onPress={() => navigation.navigate("CheklistIbuMelahirkan")}>
                <View  style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, }}>
                    <Text style={{fontFamily:fonts.primary[600], color:colors.primary, textAlign:'center', 
                    fontSize:20, }}>Ibu Melahirkan</Text>
                </View>
            </TouchableNativeFeedback>
            <MyGap jarak={20}/>
            <TouchableNativeFeedback onPress={() => navigation.navigate("CheklistIbuMenyusui")}>
                <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10, }}>
                    <Text style={{fontFamily:fonts.primary[600], color:colors.primary, textAlign:'center', 
                    fontSize:20, }}>Ibu Menyusui</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

    </View>
   </ScrollView>
  
    </View>
  )
}