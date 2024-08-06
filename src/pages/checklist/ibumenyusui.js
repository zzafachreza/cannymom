import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Modal, TouchableOpacity, Image, Alert } from 'react-native';
import { colors, fonts } from '../../utils';
import { MyHeader, MyRadio } from '../../components';

export default function ChecklistIbuMenyusui({route, navigation }) {
    const { view } = route.params || {}; // Mengambil parameter 'view'
    const [currentView, setCurrentView] = useState(view || 'awal');
    const scrollViewRef = useRef(null);


  const [responses, setResponses] = useState({
    apakahadaperasaanbersalah: null,
    demamsuhu38derajat: null,
    apakahandamengalamisakitkepala : null,
    pandangankabur: null,
    jantungberdebarataunyeridada: null,
    cairandarijalanlahir: null,
    nafaspendekdadanyeribatuklebohdari2minggu: null,
    bengkakkemerahanberjalannyeri: null,
    permasalhanBAK: null,
    daarahNifasBerbau: null,
    PendarahanLebih: null,
    TerjadiKeputihan: null,
    
    menyusuiseseringmungkin:false,
    bilabayitidurlebihdari3jambangunkanlalususui:false,
    susuisampaipayudaraterasakosong:false,
    mencegahmasitisdanmenjagapasokanhati:false,
  });

  const handleRadioChangeSingleRadio = (key) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [key]: !prevResponses[key],
    }));
  };


  
  const [responses2, setResponses2] = useState({
    zikirtasbih: false,
    zikirtahmid: false,
    zikirtahlil: false,
    membacadoa1: false,
    membacadoa2: false,
   
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



  const handleNavigate = (view) => {
    
    setCurrentView(view);
    if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Scroll to top when view changes
    }
};


  const handleNext = () => {
    const allResponsesEmpty = Object.values(responses).every(value => !value);
    if (allResponsesEmpty) {
        Alert.alert(
          "Perhatian",
          "Mohon pilih minimal satu opsi sebelum melanjutkan.",
          [{ text: "OK" }]
        );
      } else {
        Alert.alert("Berhasil Disimpan!");
        handleNavigate("kedua");
      }
  };

  const handleNext2 = () => {
    const allResponsesEmpty = Object.values(responses2).every(value => !value);
    if (allResponsesEmpty) {
        Alert.alert(
          "Perhatian",
          "Mohon pilih minimal satu opsi sebelum melanjutkan.",
          [{ text: "OK" }]
        );
      } else {
        Alert.alert("Berhasil Disimpan!");
        navigation.navigate("TambahCheklist")
      }
  };
  const handleBack = () => {
    navigation.goBack()
  }

  const handleModalCancel = () => {
    setModalVisible(false);
  };
  const handleModalConfirm = () => {
    setModalVisible(false);
    handleNavigate('kedua') // Ganti dengan nama layar selanjutnya
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader onPress={handleBack} judul="Checklist Ibu Menyusui" />
      <ScrollView ref={scrollViewRef}  contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F5FCFF', }}>
        {currentView === 'awal' && (
            <View style={{ padding: 10 }}>
          {/* Pemeriksaan Laboratorium */}
          <View>
            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
              Periode Nifas
            </Text>
          </View>

          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly' }}>
            <View style={{ padding: 10, width: '70%' }}>
           
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah Ada perasaan bersalah, mudah menangis, kehilangan minat, gelisah, gangguan tidur, gangguan konsentrasi.
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.apakahadaperasaanbersalah === 'Ya'}
                  onPress={() => handleRadioChange('apakahadaperasaanbersalah', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.apakahadaperasaanbersalah === 'Tidak'}
                  onPress={() => handleRadioChange('apakahadaperasaanbersalah', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Pemeriksaan Gigi */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah Anda pernah mengalami demam suhu &gt; 38°C
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.demamsuhu38derajat === 'Ya'}
                  onPress={() => handleRadioChange('demamsuhu38derajat', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.demamsuhu38derajat === 'Tidak'}
                  onPress={() => handleRadioChange('demamsuhu38derajat', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Demam Lebih Dari 2 Hari */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>

              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah Anda mengalami sakit kepala?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.apakahandamengalamisakitkepala === 'Ya'}
                  onPress={() => handleRadioChange('apakahandamengalamisakitkepala', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.apakahandamengalamisakitkepala === 'Tidak'}
                  onPress={() => handleRadioChange('apakahandamengalamisakitkepala', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Sakit Kepala */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah Anda merasakan atau mengalami pandangan kabur?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.pandangankabur === 'Ya'}
                  onPress={() => handleRadioChange('pandangankabur', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.pandangankabur === 'Tidak'}
                  onPress={() => handleRadioChange('pandangankabur', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Sulit Tidur */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah Anda mengalami jantung berdebar-debar atau nyeri di dada?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.jantungberdebarataunyeridada === 'Ya'}
                  onPress={() => handleRadioChange('jantungberdebarataunyeridada', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.jantungberdebarataunyeridada === 'Tidak'}
                  onPress={() => handleRadioChange('jantungberdebarataunyeridada', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Jantung Berdebar */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah terjadi pengeluaran cairan dari jalan lahir?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.cairandarijalanlahir === 'Ya'}
                  onPress={() => handleRadioChange('cairandarijalanlahir', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.cairandarijalanlahir === 'Tidak'}
                  onPress={() => handleRadioChange('cairandarijalanlahir', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Batuk Lebih Dari 2 Minggu */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah Anda mengalami nafas yang pendek, terengah-engah, nafas dangkal, disertai nyeri dada, nafas berat, batuk lebih dari 2 minggu?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.nafaspendekdadanyeribatuklebohdari2minggu === 'Ya'}
                  onPress={() => handleRadioChange('nafaspendekdadanyeribatuklebohdari2minggu', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.nafaspendekdadanyeribatuklebohdari2minggu === 'Tidak'}
                  onPress={() => handleRadioChange('nafaspendekdadanyeribatuklebohdari2minggu', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Saudara Penderita TB */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah terjadi bengkak kemerahan, bengkak disertai nyeri, benjolan disertai nyeri, dan ada keluhan dalam menyusui?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.bengkakkemerahanberjalannyeri === 'Ya'}
                  onPress={() => handleRadioChange('bengkakkemerahanberjalannyeri', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.bengkakkemerahanberjalannyeri === 'Tidak'}
                  onPress={() => handleRadioChange('bengkakkemerahanberjalannyeri', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Janin Tidak Bergerak */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah Anda mengalami tidak bisa BAK, BAK sedikit tapi sering, terasa panas, nyeri panggul, urin keluar tanpa disadari?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.permasalhanBAK === 'Ya'}
                  onPress={() => handleRadioChange('permasalhanBAK', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.permasalhanBAK === 'Tidak'}
                  onPress={() => handleRadioChange('permasalhanBAK', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Cairan Berbau */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah darah nifas anda berbau atau mengalir atau ada nyeri perut bawah?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.daarahNifasBerbau === 'Ya'}
                  onPress={() => handleRadioChange('daarahNifasBerbau', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.daarahNifasBerbau === 'Tidak'}
                  onPress={() => handleRadioChange('daarahNifasBerbau', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Sakit Saat Kencing */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah terjadi pendarahan lebih dari 1 pembalut basah dalam 5 menit?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.PendarahanLebih === 'Ya'}
                  onPress={() => handleRadioChange('PendarahanLebih', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.PendarahanLebih === 'Tidak'}
                  onPress={() => handleRadioChange('PendarahanLebih', 'Tidak')}
                />
              </View>
            </View>
          </View>

          {/* Diare Berulang */}
          <View style={{ padding: 10, flexDirection: "row", justifyContent: 'space-evenly', top: -20 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apakah terjadi keputihan dengan cairan berlebih, berwarna dan berbau?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  label="Ya"
                  selected={responses.TerjadiKeputihan === 'Ya'}
                  onPress={() => handleRadioChange('TerjadiKeputihan', 'Ya')}
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <MyRadio
                  label="Tidak"
                  selected={responses.TerjadiKeputihan === 'Tidak'}
                  onPress={() => handleRadioChange('TerjadiKeputihan', 'Tidak')}
                />
              </View>
            </View>
          </View>

     <View style={{padding:10}}>
     <Text style={{fontFamily:fonts.primary[600], textAlign:'center', fontSize:20, color:colors.tekscolor, }}>Periode Menyusui</Text>
     </View>



     <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Menyusui sesering mungkin/semau bayi (8-12 kali sehari atau lebih).
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses.menyusuiseseringmungkin}
                  onPress={() => handleRadioChangeSingleRadio('menyusuiseseringmungkin')}
                />
              </View>
         
            </View>
          </View>




          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Bila bayi tidur lebih dari 3 jam, bangunkan, lalu susui
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses.bilabayitidurlebihdari3jambangunkanlalususui}
                  onPress={() => handleRadioChangeSingleRadio('bilabayitidurlebihdari3jambangunkanlalususui')}
                />
              </View>
         
            </View>
          </View>


          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Susui sampai payudara terasa kosong, lalu pindah ke payudara sisi yang lain
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses.susuisampaipayudaraterasakosong}
                  onPress={() => handleRadioChangeSingleRadio('susuisampaipayudaraterasakosong')}
                />
              </View>
         
            </View>
          </View>


          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Apabila bayi sudah kenyang, tetapi payudara masih terasa penuh/ kencang,  maka payudara perlu diperah, ASI disimpan. Hal ini bertujuan mencegah mastitis dan menjaga pasokan ASI
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses.mencegahmasitisdanmenjagapasokanhati}
                  onPress={() => handleRadioChangeSingleRadioe('mencegahmasitisdanmenjagapasokanhati')}
                />
              </View>
         
            </View>
          </View>
          


          {/* Tombol Selanjutnya */}
          <View style={{ padding: 10, marginTop:20}}>
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
              Sunnah Ibu
            </Text>
          </View>

          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ padding: 10, width: '70%' }}>
           
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Zikir tasbih سُبْحَانَ الله  (33x)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.zikirtasbih}
                  onPress={() => handleRadioChange2('zikirtasbih')}
                />
              </View>
            
            </View>
          </View>

          {/* Pemeriksaan Gigi */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{width: '70%', padding:10 }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Zikir tahmid الْحَمْدُ للهِ (33x)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.zikirtahmid}
                  onPress={() => handleRadioChange2('zikirtahmid')}
                />
              </View>
            </View>
          </View>

          {/* Demam Lebih Dari 2 Hari */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10}}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Zikir tahlil  لَا إِلَهَ إِلَّا اللَّهُ (33x)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses2.zikirtahlil}
                  onPress={() => handleRadioChange2('zikirtahlil')}
                />
              </View>
            </View>
          </View>

          {/* Sakit Kepala */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Membaca doa{'\n'}
 الَّذِي خَلَقَنِي فَهُوَ يَهْدِينِ ,وَالَّذِي هُوَ يُطْعِمُنِي وَيَسْقِينِ ,وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ  
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio

                  selected={responses2.membacadoa1}
                  onPress={() => handleRadioChange2('membacadoa1')}
                />
              </View>
            </View>
          </View>

          {/* Sulit Tidur */}
          <View style={{ flexDirection: "row", justifyContent: 'space-between', top:10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Membaca doa{'\n'}
اَللهُمَّ طَهِّرُ قَلْبِىْ مِنَ النِّفَاقِ وَحَصِّنْ فَرْجِيْ مِنَ الْفَوَاحِشِ

              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
            
                  selected={responses2.membacadoa2}
                  onPress={() => handleRadioChange2('membacadoa2')}
                />
              </View>
            </View>
          </View>

          {/* Tombol Selanjutnya */}
          <View style={{ padding: 10 }}>
            <TouchableNativeFeedback onPress={handleNext2}>
              <View style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 10 }}>
                <Text style={{ fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center' }}>Selanjutnya</Text>
              </View>
            </TouchableNativeFeedback>
          </View>




        </View>
        )} 


        
      </ScrollView>

     
    </View>
  );
}