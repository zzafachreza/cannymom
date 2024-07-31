import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyGap, MyHeader } from '../../components'

export default function KalendardanCheklist({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader judul="Kalender & Checklist"/>

    <ScrollView>
    <View style={{padding:10,  }}>

    <TouchableNativeFeedback>
        <View style={{padding:10, borderRadius:10, flexDirection:"row", borderWidth:1, justifyContent:'center'}}>
        <View style={{justifyContent:'center', marginRight:20, }}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32, }}>Jadwal</Text>
        </View>

            <View>
                <Image style={{width:79, height: 78}} source={require('../../assets/jadwal.png')}/>
            </View>
        </View>
    </TouchableNativeFeedback>
    <MyGap jarak={20}/>

    
    <TouchableNativeFeedback>
        <View style={{padding:10, borderRadius:10, flexDirection:"row", borderWidth:1, justifyContent:'center'}}>

            <View style={{marginRight:20, }}>
                <Image style={{width:79, height: 79}} source={require('../../assets/cheklist.png')}/>
            </View>

        <View style={{justifyContent:'center', }}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:32, }}>Checklist</Text>
        </View>
        </View>
    </TouchableNativeFeedback>

    </View>
    </ScrollView>
    </View>
  )
}