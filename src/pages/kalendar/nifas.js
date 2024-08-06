import { Alert, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import React, { useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyCalendar, MyGap, MyHeader, MyRadio } from '../../components';
import moment from 'moment';

export default function PerhitunganNifas({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDays, setSelectedDays] = useState(new Array(60).fill(false));

  // Function to generate nifas dates
  const nifasDates = () => {
    const dates = [];
    for (let i = 1; i <= 60; i++) {
      if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, ,26, 27, 28, 29,  30, 31, 32,33,34,35,36,37,38,39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,  50,51, 52 , 53, 54, 55, 56, 57, 58 , 59,  60].includes(i)) {
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
  
  
  // Toggle checkbox state
  const toggleCheckbox = (index) => {
    setSelectedDays(prevDays => {
      const newDays = [...prevDays];
      newDays[index] = !newDays[index];
      console.log(`Checkbox ${index + 1} (${newDays[index] ? 'Checked' : 'Unchecked'})`);
      return newDays;
    });
  };

  const handleBack = () => {
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader onPress={handleBack} judul="Perhitungan Nifas" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 20 }}>
          {!selectedDate ? (
            <>
              <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 24 }}>
                Pemantauan Nifas
              </Text>
              <MyGap jarak={30} />
              <MyCalendar
                label="Tanggal Melahirkan"
                placeholder="Pilih Tanggal"
                onDateChange={date => {
                  console.log('Tanggal dipilih:', date);
                  setSelectedDate(date);
                }}
                value={selectedDate}
              />
            </>
          ) : (
            <>
              <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color:colors.tekscolor }}>
                Tanggal Melahirkan: {moment(selectedDate).format('DD MMMM YYYY')}
              </Text>
              <View style={{ marginTop: 10 , padding:10}}>
                {nifasDates().map((item) => (
                  <MyRadio
                    key={item.index}
                    label={item.label}
                    selected={selectedDays[item.index]}
                    onPress={() => toggleCheckbox(item.index)}
                  />
                ))}
              </View>
              <Text style={styles.note}>
                ** Pantau dan beri centang setiap harinya
                {'\n'}
                ** Jika lebih dari 60 hari, maka dikatakan istikhadlah
              </Text>
              <TouchableNativeFeedback onPress={handleSave}>
                <View style={styles.saveButton}>
                  <Text style={styles.saveButtonText}>Simpan</Text>
                </View>
              </TouchableNativeFeedback>
            </>
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
  note: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.primary,
    marginTop: 20,
    textAlign: 'center',
  },
});
