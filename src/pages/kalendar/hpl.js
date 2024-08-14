import { Alert, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyCalendar, MyGap, MyHeader } from '../../components';
import moment from 'moment';
import axios from 'axios';
import { apiURL, getData, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';

export default function PerhitunganHPL({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hpl, setHPL] = useState({
    hpl: '',
    show: '',
  });

  const calculateHPL = (date) => {
    if (!date) {
      Alert.alert('Error', 'Silakan pilih tanggal terlebih dahulu');
      return;
    }

    const lastMenstruationDate = moment(date);
    const estimatedHPL = lastMenstruationDate.add(7, 'days').add(9, 'months');

    setHPL({
      hpl: estimatedHPL.format('YYYY-MM-DD'),
      show: estimatedHPL.format('dddd, DD MMMM YYYY')
    });
  };

  const saveHPL = () => {


    getData('user').then(uu => {
      axios.post(apiURL + 'update_hpl', {
        id: uu.id,
        hpl: hpl.hpl
      }).then(res => {
        console.log(res.data);
        if (res.data.status == 200) {
          storeData('user', res.data.data)
          showMessage({
            message: res.data.message,
            type: 'success',
            icon: 'success',
            duration: 3000,
            titleStyle: {
              fontFamily: fonts.primary[600],
              textAlign: 'center'
            },
          });
          navigation.goBack();
        }
      })
    })
    // SIMPAN KE LOCAL DAN MYSQL UNTUK HASIL PERHITUNGAN HPL;

  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader judul="Perhitungan HPL" />
      <ScrollView >
        <View style={{ padding: 20 }}>
          <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 24 }}>Perhitungan HPL</Text>
          <MyGap jarak={30} />
          <MyCalendar
            label="Tanggal Terakhir Ibu Menstruasi"
            placeholder="Pilih Tanggal"
            onDateChange={date => setSelectedDate(date)}
            value={selectedDate}
          />
          <MyGap jarak={30} />
          <TouchableNativeFeedback onPress={() => calculateHPL(selectedDate)}>
            <View style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10 }}>
              <Text style={{ fontFamily: fonts.primary[600], fontWeight: 'bold', color: colors.tekscolor, textAlign: 'center' }}>
                Hitung HPL
              </Text>
            </View>
          </TouchableNativeFeedback>
          {hpl.show.length > 0 && (
            <View style={{ marginTop: 50 }}>
              <Text style={{ fontFamily: fonts.primary[400], textAlign: 'center', fontSize: 18 }}>
                Tanggal Perkiraan Lahir:
              </Text>
              <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 25 }}> {hpl.show}</Text>
              <TouchableOpacity onPress={saveHPL} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Simpan</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  saveButton: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    fontFamily: fonts.primary[600],
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});
