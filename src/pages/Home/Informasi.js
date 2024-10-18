import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Modal, TouchableOpacity, Image, FlatList } from 'react-native';
import { colors, fonts, MyDimensi } from '../../utils';
import { MyButton, MyHeader, MyRadio } from '../../components';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import moment from 'moment';


export default function Informasi({ navigation }) {
    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <MyHeader onPress={handleBack} judul="Informasi" />
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, backgroundColor: '#F5FCFF', }}>
                <Text style={{ color: colors.primary, fontFamily: fonts.primary[400], fontSize: MyDimensi / 2.5, lineHeight: 20, textAlign: 'justify' }}>
                    Menjadi seorang ibu, merupakan fase yang sangat ditunggu-tunggu oleh semua wanita di dunia. Ibu muslimah perlu beberapa panduan dan bimbingan untuk menjadi ibu yang cerdas dan sholehah bagi bayinya. CannyMom akan menemani dan membantu ibu baik dalam proses kehamilan, melahirkan, hingga menyusui. Panduan atau informasi keislaman dalam aplikasi Cannymom berdasarkan pada kitab Kasyifatussaja. Kitab Kasyifatussaja adalah kitab syarah karangan Syaikh Nawawi Banten. Kitab ini syarah dari matan Safinatun Najah karangan Al- Fadhil Salim bin Samir yang membahas tentang fikih ibadah secara mendalam dan terperinci. Sedangkan mengenai informasi Kesehatan dalam Aplikasi CannyMom merujuk pada website Kementerian Kesehatan sehingga informasi yang didapatkan akurat dan terpercaya.
                </Text>
                <Text style={{ color: colors.primary, fontFamily: fonts.primary[400], fontSize: MyDimensi / 2.5, lineHeight: 20, textAlign: 'justify' }}>
                    Fitur yang ada di aplikasi CannyMom dirancang dengan interaktif dan mudah dipahami, seperti:

                </Text>

                <Text style={{ marginTop: 20, color: colors.primary, fontFamily: fonts.primary[800], fontSize: MyDimensi / 2.5, lineHeight: 20, textAlign: 'justify' }}>
                    LAPORAN IBU

                </Text>
                <Text style={{ color: colors.primary, fontFamily: fonts.primary[400], fontSize: MyDimensi / 2.5, lineHeight: 20, textAlign: 'justify' }}>
                    Fitur ini berisikan kalender, dan beberapa checklist pemantauan untuk ibu hamil, melahirkan, dan menyusui berupa Kalender untuk memantau HPL dan nifas tracker, Checklist Ibu Hamil, Checklist Ibu Melahirkan, dan Checklist Ibu Menyusui

                </Text>
                <Text style={{ marginTop: 20, color: colors.primary, fontFamily: fonts.primary[800], fontSize: MyDimensi / 2.5, lineHeight: 20, textAlign: 'justify' }}>
                    WAWASAN

                </Text>
                <Text style={{ fontFamily: fonts.primary[400], color: colors.primary, fontSize: MyDimensi / 2.5, lineHeight: 20, textAlign: 'justify' }}>
                    Fitur ini berisikan beberapa panduan, informasi, dan amalan yang terpercaya sumbernya berdasar kitab fiqih Kasyifatussaja mengenai kehamilan, melahirkan, dan menyusui

                </Text>


            </ScrollView>
        </View>
    )
}

