import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Modal, TouchableOpacity, Image } from 'react-native';
import { colors, fonts } from '../../utils';
import { MyHeader, MyRadio } from '../../components';

export default function ChecklistIbuHamil({route, navigation }) {
    const { view } = route.params || {}; // Mengambil parameter 'view'
    const [currentView, setCurrentView] = useState(view || 'awal');
    const scrollViewRef = useRef(null);


  const [responses, setResponses] = useState({
    pemeriksaanLaboratorium: null,
    pemeriksaanGigi: null,
    demamLebihDari2Hari: null,
    sakitKepala: null,
    sulitTidur: null,
    jantungBerdebar: null,
    batukLebihDari2Minggu: null,
    saudaraPenderitaTB: null,
    janinTidakBergerak: null,
    cairanBerbau: null,
    sakitSaatKencing: null,
    diareBerulang: null,
  });

  
  const [responses2, setResponses2] = useState({
    makanberagammakanansecaraproporsional: false,
    minumttd: false,
    janganlupaminumairputih: false,
    batasikosumsigaram: false,
    perbanyakkosumsimakananberseratdanprotein: false,
    kosumsikalsium: false,
    kosumsisuplemen: false,
    kurangikosumsikafein: false,
    hindarikosumsimakananmentah: false,
    menjagakebersihandiri: false,
    istirahatyangcukup: false,
    bersamasuami: false,
    mengikutikelasibuhamil: false,
    hindariperawatankecantikan: false,
    hindaritidurterlentang: false,
  });


  const [responses3, setResponses3] = useState({
    Melaksanakansholattahajudmingguini: false,
    Melaksanakansholatdhuhamingguini: false,
    MembacasurahMaryammingguini: false,
    MembacasurahYusufmingguini: false,
    membacaminimal7kali: false,
    memperbanyakmembaca: false,
    
  });




  const [modalVisible, setModalVisible] = useState(false);

  const handleRadioChange = (question, value) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [question]: value
    }));
  };

  const handleRadioChange2 = (key) => {
    setResponses2((prevResponses) => ({
      ...prevResponses,
      [key]: !prevResponses[key],
    }));
  };


  const handleRadioChange3 = (key) => {
    setResponses3((prevResponses) => ({
      ...prevResponses,
      [key]: !prevResponses[key],
    }));
  };


  const handleNavigate = (view) => {
    setCurrentView(view);
    if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Scroll to top when view changes
    }
};


  const handleNext = () => {
    const hasYes = Object.values(responses).includes('Ya');
    if (hasYes) {
      setModalVisible(true);
    } else {
     handleNavigate("kedua")
    }
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };
  const handleModalConfirm = () => {
    setModalVisible(false);
    handleNavigate('kedua') // Ganti dengan nama layar selanjutnya
  };


  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader onPress={handleBack} judul="Checklist Ibu Hamil" />
      <ScrollView ref={scrollViewRef}  contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F5FCFF', }}>
        {currentView === 'awal' && (
            <View style={{ padding: 10 }}>
          {/* Pemeriksaan Laboratorium */}
          <View>
            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
              Kesehatan
            </Text>
          </View>

          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly' }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.tekscolor }}>
                • Pemeriksaan Laboratorium
              </Text>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Lakukanlah pemeriksaan kehamilan (BB, TB, tekanan darah, lingkar lengan, tinggi rahim, denyut jantung janin, pemberian imunisasi, minum tablet darah, periksa laboratorium dan USG, konseling)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.pemeriksaanLaboratorium === 'Ya'}
                  onPress={() => handleRadioChange('pemeriksaanLaboratorium', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.pemeriksaanLaboratorium === 'Tidak'}
                  onPress={() => handleRadioChange('pemeriksaanLaboratorium', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Pemeriksaan Gigi */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Lakukanlah pemeriksaan gigi dan mulut
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.pemeriksaanGigi === 'Ya'}
                  onPress={() => handleRadioChange('pemeriksaanGigi', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.pemeriksaanGigi === 'Tidak'}
                  onPress={() => handleRadioChange('pemeriksaanGigi', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Demam Lebih Dari 2 Hari */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.tekscolor, textAlign: "justify" }}>
                • Waspada Kondisi Ini (Segera ke fasilitas kesehatan jika menemukan salah satu kondisi ini)
              </Text>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda pernah mengalami demam lebih dari 2 hari?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.demamLebihDari2Hari === 'Ya'}
                  onPress={() => handleRadioChange('demamLebihDari2Hari', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.demamLebihDari2Hari === 'Tidak'}
                  onPress={() => handleRadioChange('demamLebihDari2Hari', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Sakit Kepala */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda pernah mengalami pusing atau sakit kepala berat?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.sakitKepala === 'Ya'}
                  onPress={() => handleRadioChange('sakitKepala', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.sakitKepala === 'Tidak'}
                  onPress={() => handleRadioChange('sakitKepala', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Sulit Tidur */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda pernah mengalami sulit tidur/cemas berlebih?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.sulitTidur === 'Ya'}
                  onPress={() => handleRadioChange('sulitTidur', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.sulitTidur === 'Tidak'}
                  onPress={() => handleRadioChange('sulitTidur', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Jantung Berdebar */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda merasa jantung berdebar-debar?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.jantungBerdebar === 'Ya'}
                  onPress={() => handleRadioChange('jantungBerdebar', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.jantungBerdebar === 'Tidak'}
                  onPress={() => handleRadioChange('jantungBerdebar', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Batuk Lebih Dari 2 Minggu */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda batuk lebih dari 2 minggu?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.batukLebihDari2Minggu === 'Ya'}
                  onPress={() => handleRadioChange('batukLebihDari2Minggu', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.batukLebihDari2Minggu === 'Tidak'}
                  onPress={() => handleRadioChange('batukLebihDari2Minggu', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Saudara Penderita TB */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah ada anggota keluarga atau saudara yang pernah menderita TB Paru?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.saudaraPenderitaTB === 'Ya'}
                  onPress={() => handleRadioChange('saudaraPenderitaTB', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.saudaraPenderitaTB === 'Tidak'}
                  onPress={() => handleRadioChange('saudaraPenderitaTB', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Janin Tidak Bergerak */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda merasakan janin tidak bergerak seperti biasanya?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.janinTidakBergerak === 'Ya'}
                  onPress={() => handleRadioChange('janinTidakBergerak', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.janinTidakBergerak === 'Tidak'}
                  onPress={() => handleRadioChange('janinTidakBergerak', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Cairan Berbau */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda mengalami cairan yang keluar dari vagina berbau tidak sedap?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.cairanBerbau === 'Ya'}
                  onPress={() => handleRadioChange('cairanBerbau', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.cairanBerbau === 'Tidak'}
                  onPress={() => handleRadioChange('cairanBerbau', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Sakit Saat Kencing */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda mengalami nyeri atau sakit saat berkemih?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.sakitSaatKencing === 'Ya'}
                  onPress={() => handleRadioChange('sakitSaatKencing', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.sakitSaatKencing === 'Tidak'}
                  onPress={() => handleRadioChange('sakitSaatKencing', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Diare Berulang */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda mengalami diare berulang?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.diareBerulang === 'Ya'}
                  onPress={() => handleRadioChange('diareBerulang', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.diareBerulang === 'Tidak'}
                  onPress={() => handleRadioChange('diareBerulang', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Tombol Selanjutnya */}
          <View style={{ padding: 10 }}>
            <TouchableNativeFeedback onPress={handleNext}>
              <View style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10 }}>
                <Text style={{ fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center' }}>Selanjutnya</Text>
              </View>
            </TouchableNativeFeedback>
          </View>


           {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', padding: 20, backgroundColor: 'white', borderRadius: 10,  }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, marginBottom: 10, textAlign:'center'}}>Perhatian</Text>
            <View style={{alignItems:'center'}}>
            <Image style={{width:125, height:125, }} source={require("../../assets/hospital.png")}/>
            </View>
            <Text style={{ fontFamily: fonts.primary[400], fontSize: 14, marginBottom: 20, textAlign:'center'}}>
            Bawa Ibu ke Fasilitas Kesehatan
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',  }}>
              <TouchableNativeFeedback onPress={handleModalCancel}>
                <View style={{ padding: 10, backgroundColor: 'gray', borderRadius: 5 }}>
                  <Text style={{ fontFamily: fonts.primary[600], color: 'white' }}>Batal</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={handleModalConfirm}>
                <View style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 5 }}>
                  <Text style={{ fontFamily: fonts.primary[600], color: 'white' }}>Lanjutkan</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </Modal>
        </View>


        )}

        {currentView === 'kedua' && (
            <View style={{ padding: 10 }}>
          {/* Pemeriksaan Laboratorium */}
          <View>
            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
              Kesehatan
            </Text>
          </View>

          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.tekscolor }}>
                • Nutrisi
              </Text>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Makan beragam makanan secara proporsional
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.makanberagammakanansecaraproporsional}
                  onPress={() => handleRadioChange2('makanberagammakanansecaraproporsional')}
                />
              </View>
            
            </View>
          </View>

          {/* Pemeriksaan Gigi */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{width: '70%', padding:10 }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Minum TTD (Tablet Tambah Darah) satu tablet setiap hari selama kehamilannya
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.minumttd}
                  onPress={() => handleRadioChange2('minumttd')}
                />
              </View>
            </View>
          </View>

          {/* Demam Lebih Dari 2 Hari */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10}}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Jangan lupa minum air putih 8 - 12 gelas per hari
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.janganlupaminumairputih}
                  onPress={() => handleRadioChange2('janganlupaminumairputih')}
                />
              </View>
            </View>
          </View>

          {/* Sakit Kepala */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Batasi konsumsi garam (hingga 1 sendok teh/hari)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio

                  selected={responses2.batasikosumsigaram}
                  onPress={() => handleRadioChange2('batasikosumsigaram')}
                />
              </View>
            </View>
          </View>

          {/* Sulit Tidur */}
          <View style={{ flexDirection: "row", justifyContent: 'space-between', top:10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Perbanyak konsumsi makanan berserat dan mengandung protein
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
            
                  selected={responses2.perbanyakkosumsimakananberseratdanprotein}
                  onPress={() => handleRadioChange2('perbanyakkosumsimakananberseratdanprotein')}
                />
              </View>
            </View>
          </View>

          {/* Jantung Berdebar */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Konsumsi kalsium, vitamin D, dan magnesium untuk membantu pertumbuhan bayi
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.kosumsikalsium}
                  onPress={() => handleRadioChange2('kosumsikalsium')}
                />
              </View>
            </View>
          </View>

          {/* Batuk Lebih Dari 2 Minggu */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top:10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Konsumsi suplemen yang mengandung asam folat
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.kosumsisuplemen}
                  onPress={() => handleRadioChange2('kosumsisuplemen')}
                />
              </View>
            </View>
          </View>

          {/* Saudara Penderita TB */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Kurangi konsumsi kafein hanya 1 gelas sehari
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.kurangikosumsikafein}
                  onPress={() => handleRadioChange2('kurangikosumsikafein')}
                />
              </View>
            </View>
          </View>

          {/* Janin Tidak Bergerak */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Hindari mengonsumsi makanan mentah
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.hindarikosumsimakananmentah}
                  onPress={() => handleRadioChange2('hindarikosumsimakananmentah')}
                />
              </View>
            </View>
          </View>

          {/* Cairan Berbau */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.tekscolor }}>
                • Pengingat
              </Text>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Menjaga kebersihan diri (Cuci tangan dengan sabun dan  menggunakan air bersih mengalir, mandi dan gosok gigi 2 kali sehari, keramas/cuci rambut 2 hari sekali, jaga kebersihan payudara dan daerah kemaluan, ganti pakaian dan pakaian dalam setiap hari)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.menjagakebersihandiri}
                  onPress={() => handleRadioChange2('menjagakebersihandiri')}
                />
              </View>
            </View>
          </View>

          {/* Sakit Saat Kencing */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{padding:10 ,width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Istirahat yang cukup dan kurangi stress dengan tidur malam sedikitnya 6–7 jam dan Siang hari usahakan tidur atau berbaring telentang 1–2 jam
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.istirahatyangcukup}
                  onPress={() => handleRadioChange2('istirahatyangcukup')}
                />
              </View>
            </View>
          </View>

          {/* Diare Berulang */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top:10 }}>
            <View style={{ padding:10,  width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Bersama suami lakukan stimulasi janin dengan cara, sering berbicara dengan janin, dan sering lakukan sentuhan pada perut ibu
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.bersamasuami}
                  onPress={() => handleRadioChange2('bersamasuami', 'Ya')}
                />
              </View>
            </View>
          </View>


          <View style={{flexDirection: "row", justifyContent: 'space-between', top:10 }}>
            <View style={{ padding:10,  width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Mengikuti kelas ibu hamil dan minimal 1 kali diikuti oleh suami
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.mengikutikelasibuhamil}
                  onPress={() => handleRadioChange2('mengikutikelasibuhamil')}
                />
              </View>
            </View>
          </View>

          <View style={{flexDirection: "row", justifyContent: 'space-between', top:10 }}>
            <View style={{ padding:10,  width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Hindari perawatan kecantikan yang mengandung bahan kimia dan bahan berbahaya
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.hindariperawatankecantikan}
                  onPress={() => handleRadioChange2('hindariperawatankecantikan')}
                />
              </View>
            </View>
          </View>


          <View style={{flexDirection: "row", justifyContent: 'space-between', top:10 }}>
            <View style={{ padding:10,  width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Hindari tidur terlentang &gt 10 menit pada masa hamil tua untuk menghindari kekurangan oksigen pada janin
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.hindaritidurterlentang}
                  onPress={() => handleRadioChange2('hindaritidurterlentang')}
                />
              </View>
            </View>
          </View>

          {/* Tombol Selanjutnya */}
          <View style={{ padding: 10 }}>
            <TouchableNativeFeedback onPress={() => handleNavigate('ketiga')}>
              <View style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10 }}>
                <Text style={{ fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center' }}>Selanjutnya</Text>
              </View>
            </TouchableNativeFeedback>
          </View>




        </View>
        )} 

        {currentView === 'ketiga' && (
          <View style={{ padding: 10 }}>
          {/* Pemeriksaan Laboratorium */}
          <View>
            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
              Sunnah Ibu
            </Text>
          </View>

          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Melaksanakan sholat tahajud minggu ini
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses3.Melaksanakansholattahajudmingguini}
                  onPress={() => handleRadioChange3('Melaksanakansholattahajudmingguini')}
                />
              </View>
            
            </View>
          </View>

          {/* Pemeriksaan Gigi */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{width: '70%', padding:10 }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Melaksanakan sholat dhuha minggu ini
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses3.Melaksanakansholatdhuhamingguini}
                  onPress={() => handleRadioChange3('Melaksanakansholatdhuhamingguini')}
                />
              </View>
            </View>
          </View>

          {/* Demam Lebih Dari 2 Hari */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10}}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Membaca surah Maryam minggu ini
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses3.MembacasurahMaryammingguini}
                  onPress={() => handleRadioChange3('MembacasurahMaryammingguini')}
                />
              </View>
            </View>
          </View>

          {/* Sakit Kepala */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Membaca surah Yusuf minggu ini
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio

                  selected={responses3.MembacasurahYusufmingguini}
                  onPress={() => handleRadioChange3('MembacasurahYusufmingguini')}
                />
              </View>
            </View>
          </View>

          {/* Sulit Tidur */}
          <View style={{ flexDirection: "row", justifyContent: 'space-between', top:10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Membaca حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ dan baca الْحَفِيظُ minimal 7x
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
            
                  selected={responses3.membacaminimal7kali}
                  onPress={() => handleRadioChange3('membacaminimal7kali')}
                />
              </View>
            </View>
          </View>

          {/* Jantung Berdebar */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              ثُمَّ ٱلسَّبِيلَ يَسَّرَهُ Memperbanyak baca
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses3.memperbanyakmembaca}
                  onPress={() => handleRadioChange3('memperbanyakmembaca')}
                />
              </View>
            </View>
          </View>

       

          {/* Tombol Selanjutnya */}
          <View style={{ padding: 10 , marginTop:20 }}>
            <TouchableNativeFeedback onPress={() => navigation.navigate("TambahCheklist")}>
              <View style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10 }}>
                <Text style={{ fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center' }}>Selesai</Text>
              </View>
            </TouchableNativeFeedback>
          </View>




        </View>
        )}

        
      </ScrollView>

     
    </View>
  );
}