import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, fonts } from '../../utils';
import { MyGap, MyHeader } from '../../components';
import { MYAPP } from '../../utils/localStorage';

export default function FaseMenyusui({navigation}) {

const [currentView, setCurrentView] = useState('awal', 'kedua', 'ketiga', 'empat', 'lima');
const scrollViewRef = useRef(null);


const handleNavigate= (view) => {
    setCurrentView(view);
    if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Scroll to top when view changes
    }
};

return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader judul="Menyusui"/>
    <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1,

    backgroundColor: '#F5FCFF',}}>
        

    {currentView === 'awal' && (
        <View style={{ padding:10, }}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
            textAlign:"center"}}>Puasa</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Ibu menyusui mendapat ru’sah untuk tidak puasa.  Dikutip buku Majelis Ramadhan karya Muhammad Shalih Al-Utsaimin, pada dasarnya hukum puasa bagi ibu menyusui tidak diwajibkan dalam ajaran agama Islam. Hal tersebut dijelaskan di dalam hadis yang diriwayatkan Anas bin Malik al-Ka'bi ra. Ia berkata Nabi Muhammad SAW bersabda:{'\n'}
                    {'\n'}
                    إنَّ اللهَ وَضَعَ عَنِ المُسَافِرِ شَطْرَ الصَّلَاةِ وَالصَّومَ عَنِ المُسافِرِ وَعَنِ المُرضِعِ وَعَنِ الْحُبلى{'\n'}
                    {'\n'}
                    Artinya: "Sesungguhnya Allah telah menggugurkan separuh sholat bagi musafir serta mencabut kewajiban puasa bagi musafir, wanita menyusui, dan wanita hamil." (HR Abu Daud, Tirmidzi, Nasa'i, dan Ibnu Majah).{'\n'}
                    {'\n'}
                    Jika tidak puasa karena mengkhawatirkan dirinya, dirinya sendiri dan bayinya maka hanya perlu mengqadha. Namun jika beralasan mengkhawatirkan bayinya saja maka harus mengqadha puasa dan membayar fidyah dengan jumlah satu mud (makanan pokok) atau kurang lebih 675 gram beras, untuk setiap hari yang ditinggalkan dan diberikan kepada orang fakir atau miskin.{'\n'}
                    {'\n'}
                    Niat Membayar Fidyah Bagi Ibu Hamil dan Menyusui{'\n'}
                    {'\n'}
                    نَوَيْتُ أَنْ أُخْرِجَ هَذِهِ الْفِدْيَةَ عَنْ إِفْطَارِ صَوْمِ رَمَضَانَ لِلْخَوْفِ عَلَى وَلَدِيْ على فَرْضًا لِلهِ تَعَالَى{'\n'}
                    {'\n'}
                    Latin: <Text style={{fontStyle:'italic'}}>Nawaitu an ukhrija hadzihil fidyata 'an iftari shaumi ramadhana lilkhawfi a'la waladii 'alal fardha lillahi ta'aala.</Text>​{'\n'}
                    {'\n'}
                    Artinya: Aku niat mengeluarkan fidyah ini dari tanggungan berbuka puasa Ramadan karena khawatir keselamatan anakku, fardhu karena Allah.{'\n'}
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
            textAlign:"center"}}>ASI</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>

            <View style={{marginTop:20}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Waktu pemberian ASI tidak ada batasannya namun lebih baiknya 2 jam sekali, tapi untuk pemompaan terbaik pada tengah malam jam 12 jam 1 produksi asi sedang meningkat. Bantuan agar produksi ASI meningkat, konsumsi daun katuk, karena mengandung steroid dan polifenol yang dapat meningkatkan kadar prolaktin atau hormon pelancar ASI. ASI booster alami lainnya adalah :{'\n'}
                    1. Bayam hijau kaya akan vitamin B6 yang mampu meningkatkan produksi ASI,{'\n'}
                    2. Pare kandungan likopen dan vitamin C yang tinggi, sehingga mampu meningkatkan produksi ASI. Tak hanya itu, ada kandungan vitamin K dan antioksidan yang juga terdapat pada pare.{'\n'}
                    3. Labu siam mengandung mineral besi dan vitamin B dan juga kaya asam folat.{'\n'}
                    4. Sayuran berwarna merah memiliki kandungan betakaroten. Selain itu, betakaroten juga bermanfaat untuk kesehatan mata.{'\n'}
                    5. Jagung mengandungan karbohidrat dan protein.{'\n'}
                    </Text>
                </View>

                <View style={{padding:10, borderWidth:1, borderColor:colors.primary, borderStyle:'dashed', borderRadius:10}}>
                    <Text style={{fontFamily:fonts.primary[600], textAlign:'justify', fontSize:12, color:colors.tekscolor}}>
                    Pada bayi prematur, untuk pemberian ASI nya konsultasikan pada dokter mengenai jadwal serta berapa banyak ASI yang harus diberikan. Umumnya, bayi prematur memiliki berat badan yang kurang dari angka normal. Maka itu, penting untuk memberikannya asupan ASI yang memadai agar berat badannya bisa bertambah. Bila Ibu merasa kemampuan bayi dalam menyusu berkurang atau bahkan tampak tidak ingin menyusu, jangan ragu untuk memeriksakannya ke dokter.
                    </Text>
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
            textAlign:"center"}}>Bersuci</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>
            

            <View style={{marginTop:20}}>
                <View style={{padding:10, borderWidth:1, borderRadius:10, borderStyle:'dashed', }}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    <Text style={{fontWeight:'bold', fontSize:20, fontFamily:fonts.primary[800]}}>KOTORAN BAYI</Text>{'\n'}
                    {'\n'}
                    Air kencing bayi laki-laki yg belum 2 tahun dan belum makan apapun kecuali Asi dihukumi najis MUKHOFFAFAH cara mensucikan nya cukup memercikkan air di tempat yg terkena kencingnya setelah menghilangkan dzatnya kencing dari bau warna dan rasa. Sedangkan kalau air kencingnya bayi perempuan di hukumi najis mutawasitoh sehingga cara mensucikan nya harus mengalirkan air di tempat yg terkena kencing.
                    </Text>
                </View>

                <MyGap jarak={20}/>

                <View style={{padding:10, borderWidth:1, borderRadius:10, borderStyle:'dashed', }}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    <Text style={{fontWeight:'bold', fontSize:20, fontFamily:fonts.primary[800]}}>GUMOH</Text>{'\n'}
                    {'\n'}
                    Gumoh dibagi menjadi 2 kategori, yang pertama ada yang dari perut cirinya baunya sedikit menyengat dan hukumnya najis, yang kedua ada yang dari rongga mulut atau otak hukumnya ada yang mengatakan najis, ada yang mengatakan najis tetapi dima’fu. Cara membersihkannya di lab dulu baru di lap menggunakan air untuk berjaga untuk menghindari pendapat yang mengatakan najis dengan amannya di lap dulu.
                    </Text>
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
            textAlign:"center"}}>Posisi & Pelekatan ASI</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>
            

            <View style={{marginTop:20}}>
                <View style={{padding:10, }}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Posisi pelekatan menyusui yang benar cara menyusui yang benar:{'\n'}
                    {'\n'}
                    <Text style={{fontFamily:fonts.primary[800], fontWeight:'bold'}}>POSISI</Text>{'\n'}
                    Kepala dan badan bayi membentuk garis lurus{'\n'}
                    Wajah bayi menghadap payudara, hidung berhadapan dengan puting susu{'\n'}
                    Badan bayi dekat ke tubuh ibu{'\n'}
                    Ibu menggendong/mendekap badan bayi secara utuh{'\n'}
                    {'\n'}
                    <Text style={{fontFamily:fonts.primary[800], fontWeight:'bold'}}>PELEKATAN</Text>{'\n'}
                    Bayi dekat dengan payudara dengan mulut terbuka lebar{'\n'}
                    Dagu bayi menyentuh payudara{'\n'}
                    Bagian areola di atas lebih banyak terlihat dibanding di bawah mulut bayi{'\n'}
                    Bibir bawah bayi memutar keluar (dower){'\n'}
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
            textAlign:"center"}}>Amalan</Text>
            <View style={{alignItems:'center'}}>
            <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                fontSize:10, }}>CANNYMOM WILL DO IT</Text>
            </View>
            </View>
            

            <View style={{marginTop:20}}>
                <View style={{padding:10, }}>
                    <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                    Anjuran atau amalan lain adalah men-tahnik, yaitu kita sowankan ke ulama atau kyai untuk di cetak atau dikasih leletan kurma di langit langit mulutnya, bagi orang tua juga wajib melakukan aqiqah buat anaknya, yaitu menyembelih kambing untuk sadakah kelahiran putra putrinya. Laki-laki 2 kambing, perempuan 1 kambing
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