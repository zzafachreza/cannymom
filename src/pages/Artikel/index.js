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
    <MyHeader onPress={backPage} judul="Wawasan"/>
    <ScrollView>
        <View style={{padding:10}}>
        <View style={{padding:10}}>
          <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:'justify', color:colors.tekscolor}}>

          Di gunakan untuk memberikan panduan atau arahan kepada sang ibu atau calon ibu untuk menjadikan ibu yang berwawasan dan pintar. Seperti panduan tata cara bersuci, amalan-amalan yang dapat diamalkan sang ibu untuk menjadikan anak yang pintar dan sehat masyaallah, seputar nifas, dan tips yang seimbang untuk ibu hamil. Pada menu wawasan terdapat 3 sub bab, yaitu sub bab kehamilan, melahirkan, dan menyusui.
          </Text>
        </View>
        {/* FASE KEHAMILAN */}
        <View>
          <TouchableNativeFeedback  onPress={() => navigation.navigate("SubMenuHamilan")}>
            <View style={{flexDirection:'row', justifyContent:'space-around', padding:10, borderWidth:1, 
            borderRadius:20, }}>
            <View>
              <Image style={{width:72, height:144}} source={require('../../assets/fasekehamilan.png')}/>
            </View>

            <View style={{justifyContent:'center'}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32, color:colors.tekscolor}}>Fase{'\n'}Kehamilan</Text>
            </View>

            </View>
          </TouchableNativeFeedback>
        </View>

<MyGap jarak={20}/>
        <View style={{}}>
          <TouchableNativeFeedback onPress={() => navigation.navigate("SubMenuMelahirkan")}>
            <View style={{flexDirection:'row', justifyContent:'space-around', padding:10, borderWidth:1, 
            borderRadius:20, }}>

            <View>
              <Image style={{width:72, height:144}} source={require('../../assets/fasemelahirkan.png')}/>
            </View>

            <View style={{justifyContent:'center'}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32,color:colors.tekscolor }}>Fase{'\n'}Melahirkan</Text>
            </View>
            </View>
          </TouchableNativeFeedback>
        </View>
          
<MyGap jarak={20}/>
        <View style={{marginBottom:50}}>
          <TouchableNativeFeedback onPress={() => navigation.navigate("SubMenuMenyusui")}>
            <View style={{flexDirection:'row', justifyContent:'space-around', padding:10, borderWidth:1, 
            borderRadius:20, }}>
            <View>
              <Image style={{width:105, height:115}} source={require('../../assets/fasemenyusui.png')}/>
            </View>

            <View style={{justifyContent:'center'}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32, color:colors.tekscolor}}>Fase{'\n'}Menyusui</Text>
            </View>

            </View>
          </TouchableNativeFeedback>
        </View>
        </View>
    </ScrollView>
    </View>
  )
}