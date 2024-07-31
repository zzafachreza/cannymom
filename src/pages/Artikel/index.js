import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { MyGap, MyHeader } from '../../components'
import { ScrollView } from 'react-native'
import { TouchableNativeFeedback } from 'react-native'
import { Image } from 'react-native'
import { colors, fonts } from '../../utils'

export default function Artikel({navigation}) {
    const backPage = () => {
        navigation.goBack()
      };

  return (
    <View style={{
        flex:1,  width:'100%', height:'100%', 
    }}>
    <MyHeader onPress={backPage} judul="Artikel"/>
    <ScrollView>
        <View style={{padding:10}}>

        {/* FASE KEHAMILAN */}
        <View>
          <TouchableNativeFeedback>
            <View style={{flexDirection:'row', justifyContent:'space-around', padding:10, borderWidth:1, 
            borderRadius:20, }}>
            <View style={{justifyContent:'center'}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32, color:colors.tekscolor}}>Fase{'\n'}Kehamilan</Text>
            </View>

            <View>
              <Image style={{width:72, height:144}} source={require('../../assets/fasekehamilan.png')}/>
            </View>
            </View>
          </TouchableNativeFeedback>
        </View>

<MyGap jarak={20}/>
        <View>
          <TouchableNativeFeedback>
            <View style={{flexDirection:'row', justifyContent:'space-around', padding:10, borderWidth:1, 
            borderRadius:20, }}>
            <View style={{justifyContent:'center'}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32,color:colors.tekscolor }}>Fase{'\n'}Melahirkan</Text>
            </View>

            <View>
              <Image style={{width:72, height:144}} source={require('../../assets/fasemelahirkan.png')}/>
            </View>
            </View>
          </TouchableNativeFeedback>
        </View>


        
<MyGap jarak={20}/>
        <View>
          <TouchableNativeFeedback>
            <View style={{flexDirection:'row', justifyContent:'space-around', padding:10, borderWidth:1, 
            borderRadius:20, }}>
            <View style={{justifyContent:'center'}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32, color:colors.tekscolor}}>Fase{'\n'}Menyusui</Text>
            </View>

            <View>
              <Image style={{width:105, height:115}} source={require('../../assets/fasemenyusui.png')}/>
            </View>
            </View>
          </TouchableNativeFeedback>
        </View>
        </View>
    </ScrollView>
    </View>
  )
}