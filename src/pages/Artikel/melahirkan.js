import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors, fonts } from '../../utils';
import { MyGap, MyHeader } from '../../components';
import { color } from 'react-native-reanimated';

export default function FaseMelahirkan({route, navigation}) {

    const { view } = route.params || {}; // Mengambil parameter 'view'
    const [currentView, setCurrentView] = useState(view || 'awal');
    const scrollViewRef = useRef(null);

    const handleNavigate = (view) => {
        setCurrentView(view);
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Scroll to top when view changes
        }
    };

    useEffect(() => {
        if (route.params && route.params.view) {
            setCurrentView(route.params.view);
        }
    }, [route.params]);

    const handleBack = () => {
        navigation.goBack()
    }
return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader onPress={handleBack} judul="Melahirkan"/>
    <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1,

    backgroundColor: '#F5FCFF',}}>
        

    {currentView === 'awal' && (
        <View style={{ padding:10, }}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Periode Melahirkan</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Apabila baru melahirkan salah satu anak dari dua anak kembar, diwajibkan mandi karena melahirkan salah satu dari keduanya dan hukum mandinya sah sebelum melahirkan satu anak yang lain. Kemudian, apabila melahirkan anak yang satunya lagi, maka ia wajib mandi lagi. Sama seperti kewajiban mandi karena melahirkan anak adalah karena mengeluarkan darah kempal atau daging kempal dengan syarat adanya informasi dari ahli bidan kalau darah kempal atau daging kempal itu merupakan asal terbentuknya manusia (anak).  Dicukupkan informasi tersebut berasal dari satu ahli bidan saja.{'\n'}
                    {'\n'}
                    Diwajibkan mandi atas perempuan yang melahirkan anak dalam kondisi kering, meskipun keluarnya anak tersebut tidak membatalkan wudhu. Puasa dapat batal karena melahirkan anak yang keluar dalam kondisi kering, baik mengalami nifas atau tidak, karena hakikat melahirkan itu sendiri adalah perkara yang membatalkan puasa meskipun tidak ditemukan nifas yang dialami. Berbeda apabila perempuan melahirkan sebagian tubuh anak yang kering, maka wudhunya batal dan ia tidak wajib mandi. Begitu juga apabila ia melahirkan sebagian tubuh anak yang kering, kemudian anak tersebut masuk lagi, maka wudhunya batal dan ia tidak wajib mandi.
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
            textAlign:"center"}}>Periode Nifas</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Nifas adalah darah yang keluar seusai rahim telah kosong dari kehamilan (melahirkan), meskipun darah tersebut berupa darah kempal atau daging kempal. Darah yang keluar saat sempurnanya melahirkan, darah yang keluar sebelum bayi keluar belum bisa dikatakan nifas. Minimalnya sedikit saja, 1 tetes dan minimalnya 60 hari, normalnya 40 hari menurut penelitian imam syafi’i, melebihi 60 hari termasuk istihadloh dan tidak boleh terpisah 15 hari setelah kelahiran bayi. Apabila terpisah melebihi 15 hari, maka merupakan darah haid. {'\n'}
                    {'\n'}
                    Beberapa darah yang keluar menjelang persalinan yaitu :{'\n'}
                    1. Damul wiladah/thalqi yaitu darah yang keluar saat munculnya rasa sakit saat akan melahirkan atau darah yang bersamaan dengan keluarnya bayi, damul haid hukumnya adalah{'\n'}
                    2. Haid yaitu ketika darah kontraksi bersambung dengan darah haid (minimalnya sehari semalam) sebelumnya (tidak wajib sholat){'\n'}
                    3. Istihadhoh yaitu ketika darah kontraksi tidak bersambung dengan darah haid sebelumnya (tetap wajib sholat){'\n'}
                    {'\n'}
                    Apabila perempuan yang telah melahirkan tidak mengetahui keluarnya darah kecuali setelah terlewatnya 15 hari dari masa kelahiran, maka ia tidak mengalami nifas. Apabila ia mengetahui keluarnya darah sebelum terlewatnya 15 hari dan setelah melahirkan, misalnya; keluarnya darah agak terlambat dari waktu melahirkan, maka permulaan masa nifasnya dimulai dari melihat darah. Masa masa berhentinya darah tidak termasuk masa nifas tetapi masa-masa tersebut masuk dalam hitungan 60 hari. Oleh karena, itu ia wajib mengqodho sholat yang ditinggalkan pada masa-masa berhentinya darah tersebut.{'\n'}
                    {'\n'}
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
            <Text style={{fontFamily:fonts.primary[600], fontSize:16, color:colors.tekscolor,
            textAlign:"center"}}>Perkara-Perkara yang Diharamkan Sebab Haid dan Nifas</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>
            

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                  <Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>1. Sholat</Text> {'\n'}
Perempuan haid atau nifas diharamkan melakukan sholat ketika ia adalah perempuan yang sengaja dan tahu tentang keharamannya. Apabila ia melakukan sholat maka sholatnya tersebut tidak sah secara mutlak. Ia tidak diwajibkan mengqodho sholat fardhu yang ditinggalkannya saat haid atau  nifas, tetapi jika ia mengqodhonya maka dimakruhkan dan sholat fardhu tersebut berubah menjadi sholat sunah mutlak yang tidak berpahala menurut pendapat mu’tamad.{'\n'}
{'\n'}
<Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>2. Towaf</Text>{'\n'}
Perempuan haid atau nifas tidak diperbolehkan melakukan towaf, baik towaf yang termasuk dalam nusuk atau manasik (haji atau umrah) atau yang tidak termasuk di dalamnya, karena towaf dilakukan hanya di dalam masjid.{'\n'}
{'\n'}
<Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>3. Menyentuh Mushaf</Text>{'\n'}
Perempuan haid atau nifas tidak diperbolehkan menyentuh seluruh bagian mushaf walaupun disertai dengan haa-il (penghalang) yang tebal, karena termasuk menyentuh mushaf yang dapat mengurangi sikap ta’dzim pada mushaf.{'\n'}
{'\n'}
<Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>4. Membawa Mushaf</Text>{'\n'}
Perempuan yang haid atau nifas tidak diperbolehkan membawa mushaf. Apabila ia meletakkan tangannya di atas al-Quran dan Tafsir maka hukum meletakkannya tersebut sama rinciannya dengan hukum membawanya.{'\n'}
{'\n'}
<Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>5. Berdiam diri di dalam Masjid</Text>{'\n'}
Perempuan haid atau nifas tidak diperbolehkan al-lubts di dalam masjid. Maksud al-lubts adalah berdiam diri. Begitu juga, tidak diperbolehkan mondar-mandir di masjid.{'\n'}
{'\n'}
<Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>6. Membaca al-Quran</Text>{'\n'}
Perempuan haid atau nifas tidak diperbolehkan membaca al-Quran dan diharamkan membaca al Quran) meskipun hanya satu ayat atau lebih sedikit. Diperbolehkan bagi orang junub dan perempuan haid membatin al-Quran di dalam hati tanpa melafadzkannya dan diperbolehkan juga melihat dan membaca Al Quran di dalam hati. Para ulama muslim telah bersepakat tentang diperbolehkannya membaca tahlil, tahmid, takbir, sholawat atas Rasulullah dzikir lain bagi orang junub dan perempuan haid.{'\n'}
{'\n'}
<Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>7. Puasa</Text>{'\n'}
Perempuan haid atau nifas tidak diperbolehkan berpuasa. Ketika ia berniat puasa maka puasa diharamkan atasnya. Berbeda apabila ia tidak berniat puasa, tetapi ia enggan makan dan minum, maka tidak diharamkan atasnya karena demikian itu tidak disebut sebagai puasa.{'\n'}
{'\n'}
<Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>8. Istimtak</Text>{'\n'}
Perempuan haid atau nifas tidak diperbolehkan istimtak, yaitu mubasyaroh (bersentuhan secara langsung), baik disertai dengan syahwat atau tidak, pada bagian antara pusar dan lutut dengan cara jimak, baik bersentuhan yang disertai adanya penghalang atau tidak, atau dengan cara selain jimak sekiranya tidak ada penghalang.{'\n'}
{'\n'}
</Text>
                </View>
                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableNativeFeedback onPress={() => handleNavigate('kedua')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Sebelumnya</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => handleNavigate('empat')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Selanjutnya</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )}


    
{currentView === 'empat' && (
    <View style={{ padding:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Tata Cara  Bersuci</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                   <Text style={{fontFamily:fonts.primary[600], fontWeight:"bold", }}>1. Cara Bersuci untuk Ibu</Text>{'\n'}
                   {'\n'}
                    Perkara-perkara yang mewajibkan mandi atas laki-laki dan perempuan ada 6 (enam). Sebanyak tiga diantaranya dialami oleh masing-masing laki-laki dan perempuan, yaitu masuknya khasyafah ke dalam farji, keluarnya sperma, dan mati. Sedangkan 3 (tiga) sisanya hanya dialami oleh perempuan, yaitu haid, nifas, dan melahirkan.{'\n'}
                    Pengeluaran darah nifas ada 2 macam:{'\n'}
                    1. Ibu yang setelah melahirkan jika tidak mengeluarkan darah, maka mandinya adalah mandi wiladah.Ibu langsung mengeluarkan darah maka mandinya setelah selesai nifas, mandinya dijamak antara mandi wiladah dan mandi nifas.{'\n'}
                    2. Ibu langsung mengeluarkan darah maka mandinya setelah selesai nifas, mandinya dijamak antara mandi wiladah dan mandi nifas.{'\n'}
                    </Text>

                    <Text style={{fontFamily:fonts.primary[600], fontSize:12, color:colors.tekscolor}}>
                    Niat mandi wiladah 
                    </Text>
                    <MyGap jarak={20}/>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:12, color:colors.tekscolor, textAlign:'center'}}>
                    نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الْأَكْبَرِ عَنِ الْوِلَادَةِ لِلَّهِ تَعَالَى{'\n'}
                    </Text>
                    <Text style={{fontStyle:"italic", fontFamily:fonts.primary[400], fontSize:12, color:colors.tekscolor, textAlign:'center'}}>Nawaitul ghusla liraf'il hadatsil akbari 'anil wilaadati lillaahi ta'aalaa</Text>

                    <MyGap jarak={20}/>

                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, color:colors.tekscolor, fontStyle:'italic', textAlign:'justify'}}>Artinya: “Aku berniat mandi untuk menghilangkan hadats besar sebab wiladah karena Allah Ta'ala”.</Text>
    
                    <MyGap jarak={20}/>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:12, color:colors.tekscolor}}>
                    Niat mandi setelah nifas, dijama’ 
                    </Text>

                   
                    <MyGap jarak={20}/>
                    <Text style={{fontFamily:fonts.primary[600], fontSize:12, color:colors.tekscolor, textAlign:'center'}}>
                    نَوَيْتُ الْغُسْلَ لِرَفْعِ حَدَثِ النِّفَاسِ و الْوِلَادَةِ ِللهِ تَعَالَى{'\n'}
                    </Text>
                    <Text style={{fontStyle:"italic", fontFamily:fonts.primary[400], fontSize:12, textAlign:"center", color:colors.tekscolor}}>Nawaitul ghusla liraf'il hadatsin nifaasi walwilaadati lillaahi ta'aalaa</Text>
                    <MyGap jarak={20}/>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, color:colors.tekscolor, fontStyle:'italic', textAlign:'justify'}}>Artinya: “Aku niat mandi wajib untuk mensucikan hadas besar dari nifas dan wiladah karena Allah Ta'ala”.</Text>
                    <MyGap jarak={20}/>
                    <Text style={{fontFamily:fonts.primary[400], textAlign:'justify', color:colors.tekscolor, fontSize:12, }}>

<Text style={{fontFamily:fonts.primary[600], fontWeight:'bold', }}>Tata Cara Mandi Nifas setelah Melahirkan: </Text>{'\n'}
{'\n'}
1. Membaca niat{'\n'}
2. Bersihkan telapak tangan sebanyak 3 kali{'\n'}
3. Bersihkan kotoran yang menempel di sekitar tempat yang tersembunyi dengan tangan kiri{'\n'}
4. Setelah membersihkan kemaluan, cuci tangan dengan sabun dan bilas hingga bersih{'\n'}
5. Lakukan gerakan wudhu yang sempurna seperti ketika kita akan sholat dimulai dari membasuh tangan sampai membasuh kaki{'\n'}
6. Memasukkan tangan ke dalam air, kemudian sela pangkal rambut dengan jari-jari tangan sampai menyentuh kulit kepala. Jika sudah, guyur kepala dengan air sebanyak 3 kali. Pastikan pangkal rambut juga terkena air{'\n'}
7. Bilas seluruh tubuh dengan mengguyur air. Dimulai dari sisi kanan lalu lanjutkan ke tubuh sisi kiri{'\n'}
8. Saat menjalankan tata cara mandi wajib, pastikan seluruh lipatan kulit dan bagian tersembunyi ikut dibersihkan{'\n'}
{'\n'}
      
    <Text style={{fontFamily:fonts.primary[600], fontWeight:"bold", }}>
    Tata cara mandinya sama dengan mandi junub, intinya mengalirkan air dari ujung rambut hingga ujung kaki, terutama dibersihkan di bagian bagian melahirkan. dibersihkan sebisanya karena sakit.{'\n'}
    </Text>
    {'\n'}
<Text style={{fontFamily:fonts.primary[600], fontWeight:'bold', }}>2. Cara Bersuci untuk Bayi Baru Lahir</Text>{'\n'}
{'\n'}
1. Memandikan Bayi Baru Lahir{'\n'}
  Tata cara memandikan bayi biasanya dipasrahkan kepada pihak yang berpengalaman seperti bidan atau perawat. Dalam islam, tata cara memandikan bayi adalah yang terpenting niat, dan tidak usah terlalu lama dalam memandikannya. {'\n'}
  {'\n'}
Adapun niat memandikan bayi adalah:{'\n'}
{'\n'}
<Text style={{fontFamily:fonts.primary[400], fontStyle:'italic'}}>“Ya Allah saya niat memandikan bayi ini supaya bayi ini menjadi penerus sujud saya kepada Allah SWT”</Text>{'\n'}
{'\n'}
2. Memandikan Jenazah Bayi{'\n'}
Apabila bayi telah meninggal dimana bayi tersebut tidak mengalami kehidupan, dilahirkan setelah berusia 4 bulan, tidak ada tanda-tanda kehidupan darinya, maka tidak wajib dimandikan, tetapi boleh dimandikan.
Apabila bayi gugur dalam perut ibunya sebelum berusia 6 bulan lebih atau disebut mayit siqtu, terdapat beberapa rincian dalam pengurusan jenazahnya, yaitu:{'\n'}
1. Apabila bayi mengalami tanda-tanda kehidupan, seperti bergerak, bernafas, atau menangis, meskipun belum keluar secara utuh dari ibunya, maka pengurusan jenazahnya diwajibkan sama dengan jenazah dewasa, yakni memandikan, mengkafani, mensholati dan mengubur.{'\n'}
2. Apabila jenazah tidak mengalami tanda-tanda kehidupan, maka;{'\n'}
a. Jika ia telah jelas bentuknya (seperti bentuk manusia) sekiranya bentuknya telah bergaris-garis, baik ia telah berusia 4 (empat) bulan atau belum, maka wajib mengurusnya tanpa mensholatinya.{'\n'}
b. Akan tetapi, jika ia belum jelas bentuknya maka tidak diwajibkan mengurusnya, bahkan diharamkan mensholatinya dan diperbolehkan membuangnya, tetapi disunahkan menutupinya dengan kain dan menguburnya.{'\n'}
{'\n'}


     Adapun mayit bayi yang terlahir setelah berusia 6 (enam) bulan lebih maka hukumnya adalah seperti mayit dewasa, artinya, ia wajib dimandikan, dikafani, disholati, dan dikuburkan. Meskipun ia terlahir dalam kondisi telah mati dan tidak diketahui pernah hidup, dan meskipun ia terlahir dengan tidak memiliki bentuk yang jelas, karena setelah usia tersebut tidak disebut siqtu



                    </Text>
                </View>


                
                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableNativeFeedback onPress={() => handleNavigate('awal')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Sebelumnya</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => handleNavigate('lima')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Selanjutnya</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
)}

{currentView === 'lima' && (
        <View style={{ padding:10, }}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.tekscolor,
            textAlign:"center"}}>Tips Percaya Diri Menjelang Melahirkan</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10, alignItems:'center'}}>
                    <Image style={{width:341, height:338}} source={require("../../assets/tipspercayadiri.png")}/> 
                </View>
                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableNativeFeedback onPress={() => handleNavigate('empat')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Sebelumnya</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => handleNavigate('enam')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Selanjutnya</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )}



    {currentView === 'enam' && (
        <View style={{ padding:10, }}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Dzikir dan Doa</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10,}}>
                 <Text style={{fontFamily:fonts.primary[400], textAlign:'justify', color:colors.tekscolor, fontSize:12, }}>
                 Seorang orang tua pasti mengharapkan anaknya lahir sehat, selamat, dan tak kurang suatu apapun. Di samping itu juga berharap ibu yang melahirkan selamat dan cepat bugar kembali, serta proses persalinan itu lancar. Beberapa dzikir dan doa yang dapat dilakukan adalah : {'\n'}
                    {'\n'}
                1. Ketika sudah sembilan bulan, saat sedang sakit sekali hingga sulit untuk keluar bayinya yakni membaca:

                 </Text>

                 <View style={{alignItems:'center', marginTop:20}}>
                    <Image style={{width:268, height: 182, }} source={require('../../assets/dzikirdandoa.png')}/>
                 </View>

                    <MyGap jarak={20}/>
                    <Text style={{fontFamily:fonts.primary[400], textAlign:"justify", color:colors.tekscolor, fontSize:12, }}>
                    2. Dalam keterangan kitab, setelah bayi baru lahir bayi, baiknya bayi diberikan ke ibunya terlebih dahulu untuk didekap ibunya (skinship), di taruh di dada si ibu agar ikatan antara ibu dan bayi akan kuat. Ayahnya membacakan adzan kepada bayi di telinga kanan dan iqomah di telinga kiri sebelum memandikan bayi, supaya terhindar dari gangguan. Ataupun bisa sebaliknya adzan terlebih dahulu kemudian baru dikasih ke ibunya, adzan itu penting karena Rasulullah telah mengadzani Fatimah.{'\n'}
                    3. Dibacakan doa pada telinga bayi sebelah kanan : {'\n'}
                    </Text>

                    <Text style={{fontFamily:fonts.primary[600], fontWeight:'bold', textAlign:'center', color:colors.tekscolor}}>

 وَاِنِّيْٓ اُعِيْذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطٰنِ الرَّجِيْمِ

                    </Text>
                    <MyGap jarak={20}/>
                    <Text style={{fontFamily:fonts.primary[400], textAlign:'justify', color:colors.tekscolor, fontSize:12, }}>
                    4. Dibacakan surah al-Ikhlas di telinga bayi sebelah kanan.{'\n'}
                    5. Dibacakan surah al-Qodr di telinga bayi sebelah kanan. Agar si bayi dijaga Allah tidak mendekati zina.{'\n'}
                    6. Berikan nama yang baik, hendaklah memberi nama yang bagus, dari potongan ayat al quran yang memiliki makna yang bagus. Sebaik-baiknya nama untuk laki-laki adalah Muhammad. Ataupun nama yang dikaitkan dengan sifat Allah missal Abdurrahman ataupun Abdullah.{'\n'}
                    </Text>
                </View>
                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableNativeFeedback onPress={() => handleNavigate('empat')}>
                        <View style={{padding:10, backgroundColor:colors.tekscolor, borderRadius:10, }}>
                        <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white}}>Sebelumnya</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={() => navigation.navigate("Artikel")}>
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