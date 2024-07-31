    import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
    import React, { useRef, useState } from 'react'
    import { colors, fonts } from '../../utils';
    import { MyGap, MyHeader } from '../../components';

    export default function FaseKahamilan({navigation}) {

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
        <MyHeader judul="kehamilan"/>
        <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',}}>
            
    
        {currentView === 'awal' && (
            <View style={{ padding:10, top: -20}}>
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
                        1. Jaga makanan yang masuk tetap halal{'\n'}
                        2. Menjaga pandangan, ucapan, pendengaran, dan menjaga yang masuk ke perut. Karena baik buruknya yang dilakukan ibu selama hamil akan berdampak pada bayi yang dikandung.{'\n'}
                        3. Penelitian mengatakan, air keruh yang dibacakan ayat Al-Qur’an akan menjadi jernih begitu juga janin bunda. Awal kehamilan perbanyak baca surat Muhammad, Yusuf, Maryam baik ayah maupun bunda, utamakan bunda.{'\n'}
                        4. 1/3 malam lakukan tahajud dengan wiridan : حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ dan baca الْحَفِيظُ minimal 7x jangan tinggalkan tahajud, menurut pendapat qoul sohih ibu hamil itu tidak bisa haid otomatis 9 bulan mengandung digunakan untuk beribadah.{'\n'}
                        5. Membaca surat Al-Insyiqaq minimal satu hari sekali. Ketika kandungan mulai menginjak usia 7 bulan untuk mempermudah persalinan.{'\n'}
                        6. Amalan ketika sudah Sembilan bulan, saat sedang sakit sekali hingga sulit untuk keluar bayinya yakni membaca doa{'\n'}


                        </Text>
                    </View>

                    <View style={{padding:10, backgroundColor:colors.primary, borderRadius:10, top: -20}}>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:20, }}>حَنَا وَلَدَتْ مَرْيَمَ وَمَرْيَمُ وَلَدَتْ عِيْسَى اُخْرُجْ أَيُّهَا الْمَوْلُوْدُ بِقُدْرَةِ المَلِكِ المَعْبُوْدِ</Text>
                        <MyGap jarak={20}/>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:12, textAlign:"justify"}}>Artinya: "Hana melahirkan Maryam, sedangkan Maryam telah melahirkan 'Isa. Keluarlah (lahirlah) hai anak dengan sebab kekuasaan Raja (Allaah) yang disembah ".</Text>
                    </View>

                    <View style={{padding:10, top:-20}}>
                        <Text style={{fontFamily:fonts.primary[400], color:colors.tekscolor, fontSize:12, textAlign:'justify'}}>**Dibaca saat proses persalinan diulang-ulang sebanyak- banyaknya oleh ibu yang akan melahirkan dan orang-orang yang hadir di saat persalinan tersebut.</Text>
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

        {/* PUASA */}

    {currentView === 'kedua' && (
        <View style={{ padding:10, top:-70}}>
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
                        Ibu hamil mendapat ru’sah untuk tidak puasa, namun{'\n'}
                        Jika tidak puasa karena mengkhawatirkan dirinya, dirinya sendiri dan bayinya maka hanya perlu mengqadha{'\n'}
                        {'\n'}
                        Namun jika beralasan mengkhawatirkan bayinya saja maka harus mengqadha puasa dan membayar fidyah dengan jumlah 1 mud/setara dengan 7 ons (bahan pangan sebesar satu mud (0,6 kg makanan pokok){'\n'}
                        {'\n'}
                    
                        Niat Membayar Fidyah Bagi Ibu Hamil dan Menyusui{'\n'}
                        {'\n'}
                        نَوَيْتُ أَنْ أُخْرِجَ هَذِهِ الْفِدْيَةَ عَنْ إِفْطَارِ صَوْمِ رَمَضَانَ لِلْخَوْفِ عَلَى وَلَدِيْ على فَرْضًا لِلهِ تَعَالَى
                        {'\n'}
                        {'\n'}

                        Latin: <Text style={{fontStyle:'italic'}}>Nawaitu an ukhrija hadzihil fidyata 'an iftari shaumi ramadhana lilkhawfi a'la waladii 'alal fardha lillahi ta'aala.​</Text>


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
    {/* TIPS */}
        {currentView === 'ketiga' && (
            <View style={{ padding:10, top: -40}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:30, color:colors.tekscolor,
                textAlign:"center"}}>Tips</Text>
                <View style={{alignItems:'center'}}>
                <View style={{padding:10,  backgroundColor:colors.tekscolor, borderRadius:10, width:'50%'}}>
                    <Text style={{fontFamily:fonts.primary[400], textAlign:'center', color:colors.white,
                    fontSize:10, }}>CANNYMOM WILL DO IT</Text>
                </View>
                </View>
                
                <View style={{padding:10, flexDirection:'row'}}>
                    <View>
                        <Image style={{width:169, height:169}} source={(require('../../assets/kehamilan_tips_satu.png'))}/>
                    </View>
                    <View>
                        <Image style={{width:169, height:169}} source={(require('../../assets/kehamilan_tips_dua.png'))}/>
                    </View>
                </View>

                <View style={{marginTop:20}}>
                    <View style={{padding:10}}>
                        <Text style={{fontFamily:fonts.primary[400], fontSize:12, textAlign:"justify", color:colors.tekscolor}}>
                        Minimal masa hamil dalam fikih adalah 6 bulan lebih sedikit.
                        Ketika bayi lahir saat 6 bulan lebih sedikit dari pernikahan, maka nasab si anak kepada ayahnya
                        Namun jika belum mencapai minimal masa hamil sudah lahir, nasab si anak kepada ibunya dan ayah tidak akan bisa menjadi wali nikahnya.
                        Maksimal masa hamil adalah 4 tahun, jika lebih maka nasab tidak kepada ayahnya melainkan kepada ibunya.{'\n'}
                        {'\n'}
                        <Text style={{fontWeight:'bold'}}>Flek saat hamil</Text>{'\n'}
                        Menurut Qoul Jadid/adzhar nya Imam Syafi’i darah yang keluar ketika hamil tetap dihukumi haid (jika memenuhi syarat darah haid)
                        Menurut Qoul Qodim darah yang keluar saat hamil adalah istihadhoh.
                        </Text>
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