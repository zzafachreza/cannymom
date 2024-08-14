import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyButton, MyCalendar, MyGap, MyHeader, MyRadio } from '../../components';
import moment from 'moment';
import { apiURL, getData, storeData } from '../../utils/localStorage';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { Icon } from 'react-native-elements';

export default function PerhitunganNifas({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDays, setSelectedDays] = useState(new Array(60).fill(false));

  // Function to generate nifas dates
  const nifasDates = () => {
    const dates = [];
    for (let i = 1; i <= 60; i++) {
      if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, , 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60].includes(i)) {
        dates.push({ index: i - 1, label: `Hari ke-${i}` });
      }
    }
    return dates;
  };

  // Handler to save data
  const handleSave = () => {
    if (!selectedDate) {
      Alert.alert('Tanggal melahirkan belum dipilih');
      return;
    }

    const startDate = moment(selectedDate);
    const today = moment();
    const duration = today.diff(startDate, 'days');

    console.log(`Start Date: ${startDate.format('DD MMMM YYYY')}`);
    console.log(`Today: ${today.format('DD MMMM YYYY')}`);
    console.log(`Duration (days): ${duration}`);

    // Check if all 60 days are selected
    const allDaysChecked = selectedDays.length >= 60 && selectedDays.every(day => day === true);

    if (allDaysChecked) {
      Alert.alert('Darah Istihadoh');
    } else {
      Alert.alert('Data berhasil disimpan!');
    }
  };

  const [hari, setHari] = useState([])

  const [kirim, setKirim] = useState({
    nifas_mulai: moment().format('YYYY-MM-DD'),
    nifas_batas: moment().add(60, 'days').format('YYYY-MM-DD'),
  })

  const handleBack = () => {
    navigation.goBack()
  }

  const [user, setUser] = useState({
    nifas_ke: 0
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    __getData();
  }, [])

  const __getData = () => {
    setLoading(true);
    getData('user').then(res => {
      console.log(res);
      let ARR = []
      for (let index = 1; index <= 60; index++) {
        ARR.push(index);
      }
      console.log(ARR);
      setHari(ARR);
      setUser(res);
      setLoading(false)
    })
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader onPress={handleBack} judul="Perhitungan Nifas" />
      {!loading &&
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ padding: 20 }}>
            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 24 }}>
              Pemantauan Nifas
            </Text>
            {/* sebelum setting */}
            {user.nifas_ke == 0 &&
              <View>
                <MyCalendar
                  label="Tanggal Melahirkan"
                  placeholder="Pilih Tanggal"
                  onDateChange={date => {
                    console.log('Tanggal dipilih:', date);
                    setKirim({
                      ...kirim,
                      nifas_mulai: date,
                      nifas_batas: moment(date).add(60, 'days').format('YYYY-MM-DD')
                    })
                  }}
                  value={kirim.nifas_mulai}
                />
                <MyGap jarak={10} />
                <MyButton title="Simpan" onPress={() => {
                  console.log(kirim)
                  axios.post(apiURL + 'add_nifas', {
                    nifas_mulai: kirim.nifas_mulai,
                    nifas_batas: kirim.nifas_batas,
                    id: user.id
                  }).then(res => {
                    console.log(res.data);
                    if (res.data.status == 200) {
                      storeData('user', res.data.data);
                      showMessage({
                        type: 'success',
                        icon: 'success',
                        message: res.data.message
                      });
                      navigation.goBack();
                    }
                  })
                }} />
              </View>
            }

            {user.nifas_ke > 0 &&
              <View>
                {hari.map((i, index) => {
                  return (
                    <TouchableOpacity onPress={() => {


                      axios.post(apiURL + 'update_nifas', {
                        nifas_ke: i,
                        id: user.id
                      }).then(res => {
                        console.log(res.data);
                        if (res.data.status == 200) {
                          storeData('user', res.data.data);
                          showMessage({
                            type: 'success',
                            icon: 'success',
                            message: res.data.message
                          });
                          setUser({
                            ...user,
                            nifas_ke: i
                          });

                        }
                      })

                    }}>
                      <View style={{
                        flexDirection: 'row',
                        marginVertical: 5,
                        alignItems: 'center'
                      }}>
                        <Icon type='ionicon' name='checkmark-circle' color={user.nifas_ke < i ? colors.border : colors.success} />
                        <Text style={{
                          fontFamily: fonts.primary[600],
                          fontSize: 14,
                          left: 10,
                        }}>
                          Hari Ke - {i}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )
                })}
                <Text style={styles.note}>
                  ** Pantau dan beri centang setiap harinya
                  {'\n'}
                  ** Jika lebih dari 60 hari atau {moment(user.nifas_batas).format('dddd, DD MMMM YYYY')}, maka dikatakan istikhadlah
                </Text>
              </View>
            }
          </View>
        </ScrollView>
      }

      {
        loading && <ActivityIndicator size="large" color={colors.primary} />
      }
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
  note: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.primary,
    marginTop: 20,
    textAlign: 'center',
  },
});
