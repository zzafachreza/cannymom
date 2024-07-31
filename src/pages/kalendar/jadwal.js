import { ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyCalendar, MyHeader } from '../../components';
import moment from 'moment';

export default function KalendarJadwal({ navigation }) {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [currentView, setCurrentView] = useState('awal');
  const scrollViewRef = useRef(null);

  const hitungHPL = () => {
    if (inputValue) {
      const selectedDate = moment(inputValue);
      const newDate = selectedDate.add(7, 'days').add(9, 'months');
      setResult(newDate.format('DD MMMM YYYY'));
    } else {
      setResult('Silakan pilih tanggal terlebih dahulu');
    }
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader judul="Menyusui" />
      <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F5FCFF' }}>
        {currentView === 'awal' && (
          <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 24, color: colors.tekscolor }}>
              Perhitungan HPL
            </Text>

            <View style={{ marginTop: 20 }}>
              <View style={{ padding: 10 }}>
                <MyCalendar value={inputValue} onDateChange={setInputValue} label="Tanggal Terakhir Ibu Menstruasi" />

                <View>
                  <TouchableNativeFeedback onPress={hitungHPL}>
                    <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10 }}>
                      <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white }}>
                        Hitung HPL
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>

                {result !== null && (
                  <View>
                    <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.tekscolor, marginTop: 20 }}>
                      {result}
                    </Text>
                    <TouchableNativeFeedback onPress={() => handleNavigate('kedua')}>
                      <View style={{ padding: 10, backgroundColor: colors.tekscolor, borderRadius: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', color: colors.white }}>
                          Selanjutnya
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
        {/* Komponen dan tampilan untuk view lainnya */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
