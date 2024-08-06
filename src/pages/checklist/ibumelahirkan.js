import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Modal, TouchableOpacity, Image, Alert } from 'react-native';
import { colors, fonts } from '../../utils';
import { MyHeader, MyRadio } from '../../components';

export default function ChecklistIbuMelahirkan({route, navigation }) {
    const handleBack = () => {
        navigation.goBack()
      }
    const { view } = route.params || {}; // Mengambil parameter 'view'
    const [currentView, setCurrentView] = useState(view || 'awal');
    const scrollViewRef = useRef(null);


  const [responses, setResponses] = useState({
    perutmulas: false,
    pemeriksaanGigi: false,
    frekuensiBuangAirKecilyangMeningkatDrastis: false,
    ApakahandaPernahMengalamiPusingatauSakitKepalaBerat: false,
    AirKetubanPecah: false,
    NyeriAtauKramPadaPunggung: false,
    ZikirTasbih: false,
    ZikirTahmid: false,
    ZikirTahlil: false,
    Beristigfar: false,
    membacaSholawat: false,

  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleRadioChange = (key) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [key]: !prevResponses[key]
    }));
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Scroll to top when view changes
    }
};



const handleNext = () => {
    // Check if all radio buttons are not selected
    const allResponsesEmpty = Object.values(responses).every(value => !value);

    if (allResponsesEmpty) {
      Alert.alert(
        "Perhatian",
        "Mohon pilih minimal satu opsi sebelum melanjutkan.",
        [{ text: "OK" }]
      );
    } else {
      Alert.alert("Berhasil Disimpan!");
      navigation.navigate("TambahCheklist");
    }
  };


  const handleModalCancel = () => {
    setModalVisible(false);
  };
  const handleModalConfirm = () => {
    setModalVisible(false);
    handleNavigate('kedua') // Ganti dengan nama layar selanjutnya
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader onPress={handleBack} judul="Checklist Ibu Melahirkan" />
      <ScrollView ref={scrollViewRef}  contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F5FCFF', }}>
        {currentView === 'awal' && (
            <View style={{ padding: 10 }}>
          {/* Pemeriksaan Laboratorium */}
          <View>
            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
              Tanda Awal Persalinan
            </Text>
          </View>

          <View style={{flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Perut mulas-mulas yang teratur, timbulnya semakin sering dan semakin lama
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses.perutmulas}
                  onPress={() => handleRadioChange('perutmulas')}
                />
              </View>

            </View>
          </View>

          {/* Pemeriksaan Gigi */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Lakukanlah pemeriksaan gigi dan mulut
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses.pemeriksaanGigi}
                  onPress={() => handleRadioChange('pemeriksaanGigi')}
                />
              </View>
            </View>
          </View>

          {/* Demam Lebih Dari 2 Hari */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Frekuensi buang air kecil yang meningkat drastis
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
              
                  selected={responses.frekuensiBuangAirKecilyangMeningkatDrastis}
                  onPress={() => handleRadioChange('frekuensiBuangAirKecilyangMeningkatDrastis')}
                />
              </View>
           
            </View>
          </View>

          {/* Sakit Kepala */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                Apakah anda pernah mengalami pusing atau sakit kepala berat?
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
               
                  selected={responses.ApakahandaPernahMengalamiPusingatauSakitKepalaBerat}
                  onPress={() => handleRadioChange('ApakahandaPernahMengalamiPusingatauSakitKepalaBerat')}
                />
              </View>
            </View>
          </View>

          {/* Sulit Tidur */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Air ketuban pecah
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
      
                  selected={responses.AirKetubanPecah}
                  onPress={() => handleRadioChange('AirKetubanPecah')}
                />
              </View>
           
            </View>
          </View>

          {/* Jantung Berdebar */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Nyeri atau kram pada punggung, perut, atau kram seperti nyeri yang dirasakan saat mendekati masa menstruasi, tetapi lebih sakit.
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
           
                  selected={responses.NyeriAtauKramPadaPunggung}
                  onPress={() => handleRadioChange('NyeriAtauKramPadaPunggung')}
                />
              </View>
             
            </View>
          </View>

   

          {/* Saudara Penderita TB */}
          <View style={{marginTop:20}}>
            <Text style={{fontFamily:fonts.primary[600], color:colors.tekscolor, fontSize:20, textAlign:'center'}}>Sunnah Ibu</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Zikir tasbih سُبْحَانَ الله  (33x)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses.ZikirTasbih}
                  onPress={() => handleRadioChange('ZikirTasbih')}
                />
              </View>
            </View>
          </View>

          {/* Janin Tidak Bergerak */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Zikir tahmid الْحَمْدُ للهِ (33x)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
        
                  selected={responses.ZikirTahmid}
                  onPress={() => handleRadioChange('ZikirTahmid')}
                />
              </View>
         
            </View>
          </View>

          {/* Cairan Berbau */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Zikir tahlil  لَا إِلَهَ إِلَّا اللَّهُ (33x)
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
               
                  selected={responses.ZikirTahlil}
                  onPress={() => handleRadioChange('ZikirTahlil')}
                />
              </View>
    
            </View>
          </View>

          {/* Sakit Saat Kencing */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Beristighfar{'\n'}
              أَسْتَغْفِرُ اللهَ الَّذِي لاَ إِلهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ وَ أَتُوبُ إِلَيْه
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
                  selected={responses.Beristigfar}
                  onPress={() => handleRadioChange('Beristigfar')}
                />
              </View>
            </View>
          </View>

          {/* Diare Berulang */}
          <View style={{flexDirection: "row", justifyContent: 'space-between', top: 10 }}>
            <View style={{ padding: 10, width: '70%' }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
              Membaca Sholawat{'\n'}
              اَللَّــهُمَّ صَلِّ عَـلـٰى سَـيِّـدِنَـا مُحَمَّدٍ عَبْدِكَ وَنَـبِـيِّكَ وَرَسُوْلِكَ نَبِى الْأُمِّـى وَعَــلـٰى أَلِـهِ وَصَحْبِهِ وَسِلِّـمْ
              </Text>
            </View>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <MyRadio
        
                  selected={responses.membacaSholawat}
                  onPress={() => handleRadioChange('membacaSholawat')}
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

       
        
      </ScrollView>

     
    </View>
  );
}