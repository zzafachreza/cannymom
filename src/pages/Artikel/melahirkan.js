import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, fonts } from '../../utils';
import { MyGap, MyHeader } from '../../components';

export default function FaseMelahirkan({navigation}) {

const [currentView, setCurrentView] = useState('awal', 'kedua', 'ketiga');
const scrollViewRef = useRef(null);


const handleNavigate= (view) => {
    setCurrentView(view);
    if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Scroll to top when view changes
    }
};

return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader judul="melahirkan"/>
    <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1,

    backgroundColor: '#F5FCFF',}}>
        

    {currentView === 'awal' && (
        <View style={{ padding:10, }}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Nifas</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Darah yang keluar menjelang persalinan{'\n'}
                    Damul wiladah/thalqi : darah yang keluar saat munculnya rasa sakit saat akan melahirkan atau darah yang bersamaan dengan keluarnya bayi, damul haid hukumnya adalah{'\n'}
                     1. Haid – ketika darah kontraksi bersambung dengan darah haid (minimalnya sehari semalam) sebelumnya (tidak wajib sholat){'\n'}
                     2. Istihadhoh – ketika darah kontraksi tidak bersambung dengan darah haid sebelumnya (tetap wajib sholat){'\n'}
                     {'\n'}
                    Periode nifas{'\n'}
                    § Melahirkan, adalah proses pengeluaran hasil konsepsi atau yang biasa kita sebut sebagai janin atau bayi dalam kandungan. Prosesnya bisa jadi hal yang membahagiakan karena menjadi ujung dari penantian selama 9 bulan.{'\n'}
                    § Nifas adalah darah yang keluar saat sempurnanya melahirkan, darah yang keluar sebelum bayi keluar belum bisa dikatakan nifas. Minimalnya sedikit saja, 1 tetes dan minimalnya 60 hari, normalnya 40 hari menurut penelitian imam syafi’I, melebihi 60 hari termasuk istihadloh.{'\n'}
                    § Warna darah nifas ada bermacam macam, ada yang lemah kuat dan tengah tengah hampir sama dengan haid, ada yang langsung kental, merah kehitaman, dan ada yang kuning kemerah merahan{'\n'}
                    </Text>
                </View>

                <View>
                    <TouchableNativeFeedback onPress={() => handleNavigate('kedua')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Selanjutnya</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )}

    {/* BERSUCI */}

{currentView === 'kedua' && (
    <View style={{ padding:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Bersuci</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    • Ibu{'\n'}
Pengeluaran darah nifas ada 2 macam:{'\n'}
a. Ibu yang setelah melahirkan jika tidak mengeluarkan darah, maka mandinya adalah mandi wiladah.{'\n'}
b. Ibu langsung mengeluarkan darah maka mandinya setelah selesai nifas, mandinya dijamak antara mandi wiladah dan mandi nifas.{'\n'}
{'\n'}
Niat mandi wiladah{'\n'}
{'\n'}
نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ عَنِ الْوِلَادَةِ لِلَّهِ تَعَالَى{'\n'}
{'\n'}
Artinya: “Aku berniat mandi untuk menghilangkan hadats besar sebab wiladah karena Allah Ta'ala”.
Niat mandi setelah nifas, dijama’{'\n'}
{'\n'}
 نَوَيْتُ الْغُسْلَ لِرَفْعِ حَدَثِ النِّفَاسِ و الْوِلَادَةِ ِللهِ تَعَالَى{'\n'}
 {'\n'}
Artinya: “Aku niat mandi wajib untuk mensucikan hadas besar dari nifas dan wiladah karena Allah Ta'ala”.{'\n'}
{'\n'}
Tata Cara Mandi Nifas setelah Melahirkan:{'\n'}
1.  Membaca niat{'\n'}
2.  Bersihkan telapak tangan sebanyak 3 kali{'\n'}
3. .....{'\n'}
Tata cara mandinya sama dengan mandi junub, intinya mengalirkan air dari ujung rambut hingga ujung kaki, terutama dibersihkan di bagian bagian melahirkan. dibersihkan sebisanya karena sakit.{'\n'}
{'\n'}
• Bayi{'\n'}
Untuk tata cara memandikan bayi, biasanya dipasrahkan kepada pihak yang berpengalaman seperti bidan, kalau dalam islam tata caranya yang penting niat, dan tidak usah terlalu lama dalam memandikannya, niatnya “ya allah saya niat memandikan bayi ini supaya bayi ini menjadi penerus sujud saya kepada allah SWT.”
                    </Text>
                </View>

                
                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableNativeFeedback onPress={() => handleNavigate('awal')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Sebelumnya</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => handleNavigate('ketiga')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Selanjutnya</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
)}
{/* AMALAN */}
    {currentView === 'ketiga' && (
        <View style={{ padding:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Amalan</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>
            

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    1. Ayahnya membacakan adzan kepada bayi di telinga kanan dan iqomah di telinga kiri sebelum memandikan bayi.{'\n'}
                    2. Dibacakan doa pada telinga sebelah kanan وَاِنِّيْٓ اُعِيْذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطٰنِ الرَّجِيْمِ{'\n'}
                    3. Dibacakan surah al-ikhlas di telinga sebelah kanan.{'\n'}
                    4. Dibacakan surah al-qodr di telinga sebelah kanan. Agar si bayi dijaga Allah tidak mendekati zina.{'\n'}
                    5. Anjuran atau amalan lain adalah men-tahnik, yaitu kita sowankan ke ulama atau kyai untuk di cetak atau diberi leletan kurma/makanan manis tanpa dipanaskan dengan api di langit langit mulutnya{'\n'}
                    6. Berikan nama yang baik, hendaklah memberi nama yang bagus, dari potongan ayat al quran yang memiliki makna yang bagus. Sebaik-baiknya nama untuk laki-laki adalah Muhammad. Ataupun nama yang dikaitkan dengan sifat Allah missal Abdurrahman Abdullah.{'\n'}
                    7. Bagi orang tua juga wajib melakukan aqiqah buat anaknya, yaitu menyembelih kambing untuk sadakah kelahiran putra putrinya. Laki-laki 2 kambing, cewe 1 kambing. Waktu terbaiknya adalah hari ke-7 setelah kelahiran bayi.{'\n'}
                    8. Mencukur gundul rambut bayi kemudian membeli emas atau perak sesuai berat bobot rambut bayi untuk kemudian dishodaqohkan.{'\n'}
                    </Text>
                </View>

                <View style={{ flexDirection:'row'}}>

                    <View>
                        <Image style={{width:89, height:68}} source={require('../../assets/faq_icon.png')}/>
                    </View> 
                    <View>
                        <Text style={{fontFamily:fonts.primary[600], textAlign:'justify', color:colors.tekscolor}}>
                        Bagaimana bila masa aqiqah bayi{'\n'}bertepatan dengan idul adha?{'\n'}Apakah boleh dijadikan satu?
                        </Text>
                    </View>

                </View>


                <View style={{padding:10, marginBottom: 50}}>
                    <Text style={{fontFamily:fonts.primary[400], textAlign:'justify', fontSize:12, color:colors.tekscolor, }}>Imam Romli memperbolehkan menggabung keduanya dengan syarat kurbannya kurban sunnah.
                    Imam Ibnu Hajar mengatakan tidak sah.</Text>
                </View>
    
                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableNativeFeedback onPress={() => handleNavigate('kedua')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Sebelumnya</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => navigation.navigate('Artikel')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Selesai</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )}
    </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({})