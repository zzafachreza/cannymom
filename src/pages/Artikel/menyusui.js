import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors, fonts } from '../../utils';
import { MyGap, MyHeader } from '../../components';
import { MYAPP } from '../../utils/localStorage';

export default function FaseMenyusui({route , navigation}) {
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
    <MyHeader onPress={handleBack} judul="Menyusui"/>
    <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1,

    backgroundColor: '#F5FCFF',}}>
        

    {currentView === 'awal' && (
        <View style={{ padding:10, }}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Puasa Ibu Menyusui</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Ibu menyusui mendapat ru’sah untuk tidak puasa.  Dikutip buku Majelis Ramadhan karya Muhammad Shalih Al-Utsaimin, pada dasarnya hukum puasa bagi ibu menyusui tidak diwajibkan dalam ajaran agama Islam. Hal tersebut dijelaskan di dalam hadis yang diriwayatkan Anas bin Malik al-Ka'bi ra. Ia berkata Nabi Muhammad SAW bersabda:{'\n'}
                    {'\n'}
                  <Text style={{fontFamily:fonts.primary[600], fontWeight:'bold', }}>  إنَّ اللهَ وَضَعَ عَنِ المُسَافِرِ شَطْرَ الصَّلَاةِ وَالصَّومَ عَنِ المُسافِرِ وَعَنِ المُرضِعِ وَعَنِ الْحُبلى</Text>{'\n'}
                    {'\n'}
                 <Text style={{fontStyle:"italic"}}> Artinya: "Sesungguhnya Allah telah menggugurkan separuh sholat bagi musafir serta mencabut kewajiban puasa bagi musafir, wanita menyusui, dan wanita hamil." (HR Abu Daud, Tirmidzi, Nasa'i, dan Ibnu Majah).</Text>        {'\n'}
                 {'\n'}
                    Jika tidak puasa karena mengkhawatirkan dirinya, dirinya sendiri dan bayinya maka hanya perlu mengqadha. Namun jika beralasan mengkhawatirkan bayinya saja maka harus mengqadha puasa dan membayar fidyah dengan jumlah satu mud (makanan pokok) atau kurang lebih 675 gram beras, untuk setiap hari yang ditinggalkan dan diberikan kepada orang fakir atau miskin.{'\n'}
                    {'\n'}
                    Niat Membayar Fidyah Bagi Ibu Hamil dan Menyusui        {'\n'}
                    {'\n'}
                       <Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}> نَوَيْتُ أَنْ أُخْرِجَ هَذِهِ الْفِدْيَةَ عَنْ إِفْطَارِ صَوْمِ رَمَضَانَ لِلْخَوْفِ عَلَى وَلَدِيْ على فَرْضًا لِلهِ تَعَالَى </Text>{'\n'}
                       {'\n'}
                    Latin: <Text style={{fontStyle:"italic"}}> Nawaitu an ukhrija hadzihil fidyata 'an iftari shaumi ramadhana lilkhawfi a'la waladii 'alal fardha lillahi ta'aala.​</Text>{'\n'}
                    {'\n'}
                 <Text style={{fontStyle:'italic'}}>Artinya: Aku niat mengeluarkan fidyah ini dari tanggungan berbuka puasa Ramadan karena khawatir keselamatan anakku, fardhu karena Allah.</Text>{'\n'}
                    {'\n'}
                    </Text>
                </View>

                    <View style={{padding:10, alignItems:'center'}}>
                    <Image style={{width:342, height:428}} source={require('../../assets/ibumenyusui_1.png')}/>
                    <MyGap jarak={20}/>
                    <Image style={{width:342, height:428}} source={require('../../assets/ibumenyusui_2.png')}/>
                    <MyGap jarak={20}/>
                    <Image style={{width:342, height:428}} source={require('../../assets/ibumenyusui_3.png')}/>
                    <MyGap jarak={20}/>
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
            textAlign:"center"}}>Pemberian ASI</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Waktu pemberian ASI tidak ada batasannya namun lebih baiknya 2 jam sekali, tapi untuk pemompaan terbaik pada tengah malam pukul 12 karena produksi asi sedang meningkat. Pada bayi prematur, untuk pemberian ASI nya konsultasikan pada dokter mengenai jadwal serta berapa banyak ASI yang harus diberikan. Umumnya, bayi prematur memiliki berat badan yang kurang dari angka normal. Maka itu, penting untuk memberikannya asupan ASI yang memadai agar berat badannya bisa bertambah. Bila Ibu merasa kemampuan bayi dalam menyusu berkurang atau bahkan tampak tidak ingin menyusu, jangan ragu untuk memeriksakannya ke dokter.{'\n'}
                    {'\n'}
                    Menurut kitab, hukum menyusui yaitu bagi ibu jika tidak ada udzur maka wajib untuk menyusui bayinya, terdapat dalam surah alquran QS. Al Baqarah ayat 233 yang berbunyi :{'\n'}
                    </Text>
                </View>

               <View style={{padding:10}}>
                <Text style={{fontFamily:fonts.primary[600], fontWeight:"bold", textAlign:'center', color:colors.tekscolor}}>
                وَٱلْوَٰلِدَٰتُ يُرْضِعْنَ أَوْلَٰدَهُنَّ حَوْلَيْنِ كَامِلَيْنِ ۖ لِمَنْ أَرَادَ أَن يُتِمَّ ٱلرَّضَاعَةَ ۚ وَعَلَى ٱلْمَوْلُودِ لَهُۥ رِزْقُهُنَّ وَكِسْوَتُهُنَّ بِٱلْمَعْرُوفِ ۚ لَا تُكَلَّفُ نَفْسٌ إِلَّا وُسْعَهَا ۚ لَا تُضَآرَّ وَٰلِدَةٌۢ بِوَلَدِهَا وَلَا مَوْلُودٌ لَّهُۥ بِوَلَدِهِۦ ۚ وَعَلَى ٱلْوَارِثِ مِثْلُ ذَٰلِكَ ۗ فَإِنْ أَرَادَا فِصَالًا عَن تَرَاضٍ مِّنْهُمَا وَتَشَاوُرٍ فَلَا جُنَاحَ عَلَيْهِمَا ۗ وَإِنْ أَرَدتُّمْ أَن تَسْتَرْضِعُوٓا۟ أَوْلَٰدَكُمْ فَلَا جُنَاحَ عَلَيْكُمْ إِذَا سَلَّمْتُم مَّآ ءَاتَيْتُم بِٱلْمَعْرُوفِ ۗ وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ
                </Text>
               </View>

                    <View style={{padding:10}}>
                        <Text style={{fontStyle:'italic', fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor, }}>
                        Artinya: “Para ibu hendaklah menyusukan anak-anaknya selama dua tahun penuh, yaitu bagi yang ingin menyempurnakan penyusuan. Dan kewajiban ayah memberi makan dan pakaian kepada para ibu dengan cara ma'ruf. Seseorang tidak dibebani melainkan menurut kadar kesanggupannya. Janganlah seorang ibu menderita kesengsaraan karena anaknya dan seorang ayah karena anaknya, dan warispun berkewajiban demikian. Apabila keduanya ingin menyapih (sebelum dua tahun) dengan kerelaan keduanya dan permusyawaratan, maka tidak ada dosa atas keduanya. Dan jika kamu ingin anakmu disusukan oleh orang lain, maka tidak ada dosa bagimu apabila kamu memberikan pembayaran menurut yang patut. Bertakwalah kamu kepada Allah dan ketahuilah bahwa Allah Maha Melihat apa yang kamu kerjakan”.
                        </Text>
                    </View>

                    <View style={{padding:10}}>
                        <Text style={{fontFamily:fonts.primary[400], color:colors.tekscolor, fontSize:12, textAlign:'justify', }}>
                        Ibu disarankan menyusui hingga 2 tahun tuntas jika tidak ada halangan. Sebagian ulama tetap mengatakan wajib walaupun ada sebagian yang berkata sunnah, tapi yang lebih kuat memang wajib karena dari potongan surah al Baqarah ayat 233 diterangkan bahwa ibu harus menyusui hingga 2 tahun penuh.
                        </Text>
                    </View>

                    <View style={{padding:10, alignItems:'center'}}>
                    <Image style={{width:347, height:433, }} source={require('../../assets/pemberianasi_1.png')}/>  
                    </View>

                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
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
            textAlign:"center"}}>Tips ASI Melimpah bagi Ibu</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>
            

            <View style={{marginTop:20}}>
                <View style={{padding:10, alignItems:'center'}}>
                    <Image style={{width:325, height:325}} source={require("../../assets/tipsasimelimpah_1.png")}/>
                </View>

                <MyGap jarak={20}/>

                <View style={{padding:10, alignItems:'center'}}>
                    <Image style={{width:325, height:325}} source={require("../../assets/tipsasimelimpah_2.png")}/>
                </View>
                <MyGap jarak={20}/>
                <View style={{padding:10, alignItems:'center'}}>
                    <Image style={{width:325, height:325}} source={require("../../assets/tipsasimelimpah_3.png")}/>
                </View>
                <MyGap jarak={20}/>
                <View style={{padding:10, alignItems:'center'}}>
                    <Image style={{width:325, height:325}} source={require("../../assets/tipsasimelimpah_4.png")}/>
                </View>
                <MyGap jarak={20}/>
                <View style={{padding:10, alignItems:'center'}}>
                    <Image style={{width:325, height:325}} source={require("../../assets/tipsasimelimpah_5.png")}/>
                </View>
                
                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
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

{/* Posisi & Pelekatan ASI */}
    {currentView === 'empat' && (
        <View style={{ padding:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Cara Menghilangkan Najis</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>
            

            <View style={{marginTop:20}}>
                <View style={{padding:10, backgroundColor:colors.background, borderRadius:10, }}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    <Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>AIR KENCING BAYI</Text>{'\n'}
                    {'\n'}
                    Air kencing bayi laki-laki yang belum 2 tahun dan belum makan apapun kecuali Asi dihukumi najis mukhoffafah. Apabila ragu apakah bayinya telah mencapai dua tahun ataukah belum, kencingnya termasuk mutawassithoh menurut sebagian ulama. Cara mensucikan nya cukup memercikkan air di tempat yang terkena kencingnya setelah menghilangkan dzatnya kencing dari bau, warna dan rasa. {'\n'}
                    {'\n'}
                    Dihukumi najis mutawasitoh apabila termasuk air kencing bayi perempuan, feses bayi laki-laki dan perempuan, muntahan, dan air kencing bayi laki-laki yang telah makan atau minum selain ASI. Maka, cara mensucikan nya harus mengalirkan air di tempat yang terkena Najis tersebut.{'\n'}
                    {'\n'}
                    </Text>
                </View>
                    <MyGap jarak={20}/>
                <View style={{padding:10, backgroundColor:colors.background, borderRadius:10, }}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    <Text style={{fontFamily:fonts.primary[600], fontWeight:'bold'}}>GUMOH BAYI</Text>{'\n'}
                        Gumoh dibagi menjadi 2 kategori yaitu {'\n'}
                        1. Gumoh dari perut dengan ciri bau sedikit menyengat maka dihukumi Najis{'\n'}
                        2. Gumoh dari rongga mulut atau otak hukumnya ada yang mengatakan najis, ada yang mengatakan najis tetapi dima’fu. Adapun cara membersihkannya yaitu menghilangkan najis tersebut dengan mengusap menggunakan kain/tisu kemudian dibasuh dengan air.{'\n'}
                    </Text>
                </View>

                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                <TouchableNativeFeedback onPress={() => handleNavigate('kedua')}>
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

{/* AMALAN */}
    {currentView === 'lima' && (
        <View style={{ padding:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Anjuran</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>
            

            <View style={{marginTop:20}}>
                <View style={{padding:10, }}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Anjuran atau amalan lain adalah men-tahnik, yaitu kita sowankan ke ulama atau kyai untuk di cetak atau diberi leletan kurma/makanan manis tanpa dipanaskan dengan api di langit langit mulutnya. Bagi orang tua juga wajib melakukan aqiqah buat anaknya, yaitu menyembelih kambing untuk sadakah kelahiran putra putrinya. Laki-laki 2 kambing, cewe 1 kambing. Waktu terbaiknya adalah hari ke-7 setelah kelahiran bayi.
                    </Text>
                </View>

                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                <TouchableNativeFeedback onPress={() => handleNavigate('kedua')}>
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
        <View style={{ padding:10,}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Dzikir dan Doa</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>
            

            <View style={{marginTop:20}}>
                <View style={{padding:10, }}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Saat sedang menyusui Anda bisa membaca doa dari Al-Quran Surat Asyu’ara ayat 78-80 berikut:{'\n'}
                    </Text>

                    <Text style={{fontFamily:fonts.primary[600], fontWeight:'bold', fontSize:12, textAlign:'center', color:colors.tekscolor, }}>
                    لَّذِي خَلَقَنِي فَهُوَ يَهْدِينِ, وَالَّذِي هُوَ يُطْعِمُنِي وَيَسْقِينِ ,وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ
                    </Text>
                    <MyGap jarak={20}/>
                    <Text style={{fontFamily:fonts.primary[400], fontStyle:'italic', fontSize:12, color:colors.tekscolor, textAlign:'center'}}>
                    Alladzi kholaqonii fahuwa yahdiin. Walladzi huwa yuth'imunii wa yasqiin. Wa idzaa maridhtu fahuwa yasyfiin
                    </Text>

                    <Text style={{fontFamily:fonts.primary[400], textAlign:'justify', fontSize:12, color:colors.tekscolor, }}>
                    Artinya : Dialah Allah SWT yang telah menciptakan aku, maka  dialah yang menunjuki aku, dan Dialah Tuhan yang memberiku makan dan minum, dan apabila aku sakit, Dialah yang menyembunyikan aku.{'\n'}
                    {'\n'}
                    Selain itu, ibu dianjurkan berzikir المتين sebanyak 70 kali sehari di waktu malam dan fajar. Setelah berzikir tiup segelas air lalu minumlah.{'\n'}
                    </Text>
                </View>

                <View style={{padding:10, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
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