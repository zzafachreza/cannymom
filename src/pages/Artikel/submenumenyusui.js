import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { MyGap, MyHeader } from '../../components'
import { ScrollView } from 'react-native'
import { TouchableNativeFeedback } from 'react-native'
import { Image } from 'react-native'
import { colors, fonts } from '../../utils'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function subMenuMenyusui({route, navigation}) {

    const handleNavigate = (view) => {
        navigation.navigate('FaseMenyusui', { view });
    };
    
    
    const backPage = () => {
        navigation.goBack()
      };

  return (
    <View style={{
        flex:1,  width:'100%', height:'100%', 
    }}>
    <MyHeader onPress={backPage} judul="Fase Menyusui"/>
    <ScrollView>
        <View style={{padding:10}}>

        {/* MASA KEHAMILAN */}
        <View>
          <TouchableNativeFeedback  onPress={() => handleNavigate('awal')}>
            <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:26, textAlign:"center", color:colors.tekscolor}}>Puasa Ibu Menyusui</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

    <MyGap jarak={20}/>

         {/* PUASA IBU HAMIL */}
         <View>
          <TouchableNativeFeedback onPress={() => handleNavigate('kedua')}>
            <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:26, textAlign:"center", color:colors.tekscolor}}>Pemberian ASI</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        
    <MyGap jarak={20}/>


         {/* Tips Sehat Ibu Hamil */}
         <View>
          <TouchableNativeFeedback onPress={() => handleNavigate('ketiga')}>
            <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:26, textAlign:"center", color:colors.tekscolor}}>Tips ASI Melimpah bagi Ibu</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

    <MyGap jarak={20}/>


         {/* Dzikir dan Doa */}
         <View>
          <TouchableNativeFeedback  onPress={() => handleNavigate('empat')}>
            <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:26, textAlign:"center", color:colors.tekscolor}}>Cara menghilangkan Najis</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        <MyGap jarak={20}/>

   {/* Dzikir dan Doa */}
   <View>
          <TouchableNativeFeedback  onPress={() => handleNavigate('lima')}>
            <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:26, textAlign:"center", color:colors.tekscolor}}>Anjuran</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        <MyGap jarak={20}/>


           {/* Dzikir dan Doa */}
           <View>
          <TouchableNativeFeedback  onPress={() => handleNavigate('enam')}>
            <View style={{padding:10, backgroundColor:colors.secondary, borderRadius:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:26, textAlign:"center", color:colors.tekscolor}}>Dzikir dan Doa</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        </View>
    </ScrollView>
    </View>
  )
}