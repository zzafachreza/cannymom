import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { colors, fonts } from '../../utils';
import { MyGap, MyHeader } from '../../components';

export default function FaseKahamilan({ route, navigation }) {

    const handleBack = () => {
        navigation.goBack()
    }

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

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <MyHeader onPress={handleBack} judul="kehamilan" />
            <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F5FCFF', }}>
                {currentView === 'awal' && (
                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 30, color: colors.tekscolor, textAlign: "center" }}>Masa Kehamilan</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, width: '50%' }}>
                                <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white, fontSize: 10, }}>CANNYMOM WILL DO IT</Text>
                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, textAlign: "justify", color: colors.tekscolor }}>
                                    Minimal masa hamil dalam fikih adalah 6 bulan lebih sedikit. Ketika bayi lahir saat 6 bulan lebih sedikit dari pernikahan, maka nasab si anak kepada ayahnya. Namun jika belum mencapai minimal masa hamil sudah lahir, nasab si anak kepada ibunya dan ayah tidak akan bisa menjadi wali nikahnya. Sedangkan maksimal masa hamil adalah 4 tahun, jika lebih maka nasab tidak kepada ayahnya melainkan kepada ibunya.
                                </Text>
                                <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, textAlign: "justify", color: colors.tekscolor }}>
                                    Apabila saat masa kehamilan mengalami keluar darah, maka :{'\n'}
                                    1. Menurut Qoul Jadid / adzhar nya Imam Syafi’i darah yang keluar ketika hamil tetap dihukumi haid (jika memenuhi syarat darah haid maka berlaku larangan bagi wanita yang sedang Haid sesuai hukum islam). Tata cara bersuci sesuai dengan wanita haid.{'\n'}
                                    2. Menurut Qoul Qodim darah yang keluar saat hamil adalah istihadhoh.{'\n'}
                                    {'\n'}
                                    Adapun perbedaan darah haid dan darah istihadhah adalah{'\n'}
                                    1. Darah haidh berwarna hitam, darah istihadhah berwarna merah mengarah ke arah kuning.{'\n'}
                                    2. Darah haidh itu kental, sedangkan darah istihadhah itu encer.{'\n'}
                                    3. Darah haidh itu baunya khas, sedangkan darah istihadhah tidak memiliki bau.{'\n'}
                                    4. Darah haidh tidak membeku{'\n'}
                                </Text>
                            </View>

                            <View>
                                <TouchableNativeFeedback onPress={() => handleNavigate('kedua')}>
                                    <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, }}>
                                        <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white }}>Selanjutnya</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                )}

                {currentView === 'kedua' && (
                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 30, color: colors.tekscolor, textAlign: "center" }}>Puasa Ibu Hamil</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, width: '50%' }}>
                                <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white, fontSize: 10, }}>CANNYMOM WILL DO IT</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, textAlign: "justify", color: colors.tekscolor }}>
                                    Ibu hamil mendapat ru’sah untuk tidak puasa, namun jika tidak puasa karena mengkhawatirkan dirinya sendiri dan bayinya maka hanya perlu mengqadha. Akan tetapi,  jika beralasan mengkhawatirkan bayinya saja maka harus mengqadha puasa dan membayar fidyah dengan jumlah 1 mud/setara dengan 7 ons (bahan pangan sebesar satu mud (0,6 kg makanan pokok).{'\n'}
                                    {'\n'}
                                    Niat Membayar Fidyah Bagi Ibu Hamil dan Menyusui{'\n'}
                                    {'\n'}
                                    نَوَيْتُ أَنْ أُخْرِجَ هَذِهِ الْفِدْيَةَ عَنْ إِفْطَارِ صَوْمِ رَمَضَانَ لِلْخَوْفِ عَلَى وَلَدِيْ على فَرْضًا لِلهِ تَعَالَى{'\n'}
                                    {'\n'}
                                    <Text style={{ fontStyle: 'italic' }}>Latin: Nawaitu an ukhrija hadzihil fidyata 'an iftari shaumi ramadhana lilkhawfi a'la waladii 'alal fardha lillahi ta'aala.</Text>​{'\n'}
                                    {'\n'}
                                    Artinya: Aku niat mengeluarkan fidyah ini dari tanggungan berbuka puasa Ramadan karena khawatir keselamatan anakku, fardhu karena Allah.
                                </Text>
                            </View>

                            <View style={{}}>
                                <Image style={{ width: 340, height: 340 }} source={require("../../assets/puasaibuhamil_1.png")} />
                                <MyGap jarak={20} />
                                <Image style={{ width: 340, height: 340 }} source={require("../../assets/puasaibuhamil_2.png")} />
                                <MyGap jarak={20} />
                                <Image style={{ width: 340, height: 340 }} source={require("../../assets/puasaibuhamil_3.png")} />
                            </View>

                            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <TouchableNativeFeedback onPress={() => handleNavigate('awal')}>
                                    <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, }}>
                                        <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white }}>Sebelumnya</Text>
                                    </View>
                                </TouchableNativeFeedback>

                                <TouchableNativeFeedback onPress={() => handleNavigate('ketiga')}>
                                    <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, }}>
                                        <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white }}>Selanjutnya</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                )}

                {currentView === 'ketiga' && (
                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 30, color: colors.tekscolor, textAlign: "center" }}>Tips Sehat Ibu Hamil</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, width: '50%' }}>
                                <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white, fontSize: 10, }}>CANNYMOM WILL DO IT</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, textAlign: "justify", color: colors.tekscolor }}>
                                    Kondisi kesehatan ibu hamil dipengaruhi oleh beberapa faktor, salah satunya adalah gizi. Kesehatan selama kehamilan berkaitan dengan pertumbuhan dan perkembangan janin, kelancaran saat persalinan dan terjadinya komplikasi atau permasalahan selama kehamilan. Ibu hamil perlu memperhatikan asupan makanan sehari-hari agar memenuhi kebutuhan zat gizi yang diperlukan selama kehamilan baik untuk kebutuhan ibu, janin dan persiapan persalinan dan masa nifas. Kondisi kehamilan merupakan masa stres fisiologis sehingga kebutuhan nutrien mengalami peningkatan. Ibu hamil berisiko mengalami berbagai masalah kurang gizi. Makanan yang sebaiknya dikonsumsi bunda di semester pertama 0-12 bulan (masih mual) sedikit sedikit saja, banyak konsumsi protein dari daging, Hati ayam, telur, dan susu untuk mencegah stunting. Periksa kehamilan minimal 6 kali selama kehamilan dan minimal 2 kali pemeriksaan oleh dokter pada trimester 1 dan 3. Kehamilan trisemester pertama Ibu hamil wajib mendapatkan pelayanan kesehatan 10T untuk mendeteksi seawal mungkin kondisi kesehatan yang dapat mengganggu pertumbuhan janin dan kesehatan ibu.
                                </Text>
                            </View>

                            <View style={{ padding: 10, justifyContent: 'center', alignContent: 'center', alignItems: "center" }}>
                                <Image style={{ width: 335, height: 418 }} source={require('../../assets/tipssehatibuhamil_1.png')} />
                                <Text style={{ fontFamily: fonts.primary[400], fontStyle: 'italic', fontSize: 10, textAlign: 'center', color: colors.tekscolor }}>Sumber: Kementerian Kesehatan, 2024</Text>
                            </View>

                            <View style={{ marginTop: 20, padding: 10 }}>
                                <Text style={{ textAlign: 'justify', fontFamily: fonts.primary[400], fontSize: 12, color: colors.tekscolor }}>
                                    Kurangnya asupan energi yang berasal dari zat gizi makro (karbohidrat, protein dan lemak) maupun zat gizi mikro terutama vitamin A, vitamin D, asam folat, zat besi, seng, kalsium dan iodium dan zat mikro lain pada wanita usia subur yang berkelanjutan (sejak masa remaja, pra konsepsi sampai masa kehamilan), mengakibatkan terjadinya Kurang Energi Kronis ( KEK) pada masa kehamilan yang diawali dengan kejadian “risiko” KEK dan ditandai oleh rendahnya cadangan energi dalam jangka waktu cukup lama yang diukur dengan Lingkar Lengan Atas (LiLA) kurang dari 23,5 cm atau Indeks Massa Tubuh (IMT) pra hamil atau Trimester I (usia kehamilan ≤12 minggu) dibawah 18,5 kg/m2. Indeks Massa Tubuh (IMT) adalah perbandingan antara berat badan (dalam kg)dengan tinggi badan (dalam meter), rumus perhitungan BB/(TB)2 (kg/m2). Gizi Seimbang untuk Ibu Hamil.{'\n'}
                                    {'\n'}
                                    Standar kebutuhan zat gizi berdasarkan angka kecukupan gizi yang dianjurkan bagi masyarakat Indonesia pada kelompok perempuan usia 19-49 tahun berkisar 2150 - 2250 kkal dan protein 60 gram per hari. Pada ibu hamil normal diperlukan tambahan energi sebesar 180 – 300 kkal dan protein mencapai 30 gram per hari. Untuk memperoleh penambahan berat badan sebesar 0.5 kg/minggu, termasuk untuk ibu hamil KEK, dibutuhkan tambahan asupan energi sebesar 500 kkal/hari dari asupan energi hariannya, dimana kurang dari 25% kandungan energi dalam makanan tambahan berasal dari protein.{'\n'}
                                </Text>
                            </View>

                            <View style={{ padding: 10, justifyContent: 'center', alignContent: 'center', alignItems: "center" }}>
                                <Image style={{ width: 340, height: 482 }} source={require('../../assets/tipssehatibuhamil_2.png')} />
                                <Text style={{ fontFamily: fonts.primary[400], fontStyle: 'italic', fontSize: 10, textAlign: 'center', color: colors.tekscolor }}>Sumber: Kementerian Kesehatan, 2024</Text>
                            </View>


                            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <TouchableNativeFeedback onPress={() => handleNavigate('kedua')}>
                                    <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, }}>
                                        <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white }}>Sebelumnya</Text>
                                    </View>
                                </TouchableNativeFeedback>

                                <TouchableNativeFeedback onPress={() => handleNavigate('empat')}>
                                    <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, }}>
                                        <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white }}>Selanjutnya</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                )}

                {currentView === 'empat' && (
                    <View style={{ padding: 10, }}>
                        <Text style={{ fontFamily: fonts.primary[600], fontSize: 30, color: colors.tekscolor, textAlign: "center" }}>Dzikir dan Doa</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, width: '50%' }}>
                                <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white, fontSize: 10, }}>CANNYMOM WILL DO IT</Text>
                            </View>
                        </View>

                        <View style={{}}>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, textAlign: "justify", color: colors.tekscolor }}>
                                    Ibu hamil mendapatkan tempat yang mulia di dalam Islam. Islam juga mensyariatkan agar ibu hamil menjalani kehamilannya dengan tenang, dekat dengan Allah, dan menghidupkan sunah Rasulullah saw., dengan membaca doa dan zikir, doa memohon perlindungan, keselamatan, kesehatan, keberkahan bagi janin dan ibu. Apalagi jika seorang wanita bersiap melahirkan, doa dan zikir ibarat senjata yang mampu memberikan ketenangan dan mendekatkannya kepada Allah. Berikut adalah beberapa dzikir dan doa yang bisa diamalkan oleh ibu hamil :{'\n'}
                                    1. Jaga makanan yang masuk tetap halal{'\n'}
                                    2. Menjaga pandangan, ucapan, pendengaran, dan menjaga yang masuk ke perut. Karena baik buruknya yang dilakukan ibu selama hamil akan berdampak pada bayi yang dikandung.{'\n'}
                                    3. Penelitian mengatakan, air keruh yang dibacakan ayat Al-Qur’an akan menjadi jernih begitu juga janin bunda. Awal kehamilan perbanyak membaca surat Muhammad, Yusuf, Maryam baik ayah maupun bunda, utamakan bunda. {'\n'}
                                    4. Saat 1/3 malam melakukan sholat tahajud dengan membaca dzikir : حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ dan baca الْحَفِيظُ minimal 7x.{'\n'}
                                    5. Ketika kandungan mulai menginjak usia 7 bulan, membaca surat Al-Insyiqaq minimal satu hari sekali agar mempermudah persalinan.{'\n'}
                                    6. Perbanyak sholawat dan baca ayat ثُمَّ ٱلسَّبِيلَ يَسَّرَهُۥ (Q.S ‘Abasa ayat 20){'\n'}
                                </Text>
                            </View>


                            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <TouchableNativeFeedback onPress={() => handleNavigate('ketiga')}>
                                    <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, }}>
                                        <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white }}>Sebelumnya</Text>
                                    </View>
                                </TouchableNativeFeedback>

                                <TouchableNativeFeedback onPress={() => navigation.navigate("Artikel")}>
                                    <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10, }}>
                                        <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white }}>Selanjutnya</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});
