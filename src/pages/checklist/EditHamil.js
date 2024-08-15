import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Modal, TouchableOpacity, Image, FlatList } from 'react-native';
import { colors, fonts } from '../../utils';
import { MyButton, MyHeader, MyRadio } from '../../components';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';

export default function EditHamil({ route, navigation }) {
    const ITEM = route.params.data;
    const ID = route.params.id;

    const handleBack = () => {
        navigation.goBack()
    }

    const [soal, setSoal] = useState([]);

    useEffect(() => {
        __getSoal();
    }, []);

    const sendServer = () => {
        console.log(kirim);

        if (soal.filter(i => i.jawab == 'Ya').length > 0) {

            let sql = `UPDATE data_hamil SET
              ${soal.map(i => {
                return `${i.kolom}='${i.jawab}'`
            })}
            
            WHERE id_hamil='${ID}'
            `;
            console.log(sql);
            axios.post(apiURL + 'add_ceklis', {
                sql: sql
            }).then(res => {
                console.log(res.data);
                showMessage({
                    type: 'success',
                    icon: 'success',
                    message: res.data.message
                });
                navigation.goBack();
            })
        } else {
            showMessage({
                type: 'danger',
                icon: 'danger',
                message: 'Ceklis Masih kosong !'
            })
        }
    }

    const __getSoal = () => {
        axios.post(apiURL + 'get_kolom', {
            table: 'hamil'
        }).then(res => {
            console.log(res.data);
            let TMP = [...res.data];
            console.log(TMP);
            res.data.map((i, index) => {
                TMP[index]['jawab'] = ITEM[i.kolom];

            })
            setSoal(TMP);

        })
    }

    const [kirim, setKirim] = useState({
        fid_user: route.params.fid_user,
        minggu_ke: route.params.minggu_ke,
    })
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <MyHeader onPress={handleBack} judul="Checklist Ibu Hamil" />
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F5FCFF', }}>
                <Text style={{
                    fontFamily: fonts.primary[600],
                    fontSize: 20,
                    textAlign: 'center',
                    marginBottom: 20,
                }}>Minggu ke {route.params.minggu_ke}</Text>

                <FlatList data={soal} renderItem={({ item, index }) => {
                    return (
                        <>
                            {item.kolom == 'kesehatan_1' &&

                                <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
                                    1) Kesehatan
                                </Text>
                            }

                            {item.kolom == 'sunnah_1' &&

                                <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
                                    2) Sunnah Ibu
                                </Text>
                            }

                            {item.kolom == 'kesehatan_1' &&
                                <Text style={{ margin: 10, fontFamily: fonts.primary[600], fontSize: 15, color: colors.tekscolor }}>
                                    •	Pemeriksaan Laboratorium
                                </Text>
                            }

                            {item.kolom == 'kesehatan_3' &&
                                <Text style={{ margin: 10, fontFamily: fonts.primary[600], fontSize: 15, color: colors.tekscolor }}>
                                    •	Waspada Kondisi Ini (Segera ke fasilitas Kesehatan jika menemukan salah satu kondisi ini)
                                </Text>
                            }


                            {item.kolom == 'kesehatan_14' &&
                                <Text style={{ margin: 10, fontFamily: fonts.primary[600], fontSize: 15, color: colors.tekscolor }}>
                                    Jika Anda Memilih “Ya” Pada Salah Satu Pertanyaan Di Atas, Maka Segera Periksa ke Fasilitas Kesehatan
                                </Text>
                            }

                            {item.kolom == 'kesehatan_14' &&
                                <Text style={{ margin: 10, fontFamily: fonts.primary[600], fontSize: 15, color: colors.tekscolor }}>
                                    •	Nutrisi
                                </Text>
                            }

                            {item.kolom == 'kesehatan_23' &&
                                <Text style={{ margin: 10, fontFamily: fonts.primary[600], fontSize: 15, color: colors.tekscolor }}>
                                    •	Pengingat
                                </Text>
                            }

                            <View style={{ paddingHorizontal: 4, flexDirection: "row", alignItems: 'center' }}>
                                <View style={{ padding: 4, width: '70%' }}>

                                    <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                                        {item.soal}
                                    </Text>



                                </View>



                                {item.tipe == 'varchar(100)' &&
                                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                                        <View>
                                            <MyRadio
                                                label="Ya"
                                                selected={item.jawab == 'Ya' ? true : false}
                                                onPress={() => {
                                                    let tmp = [...soal];
                                                    tmp[index].jawab = 'Ya';
                                                    setSoal(tmp);
                                                }}
                                            />
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <MyRadio
                                                label="Tidak"
                                                selected={item.jawab == 'Tidak' ? true : false}
                                                onPress={() => {
                                                    let tmp = [...soal];
                                                    tmp[index].jawab = 'Tidak';
                                                    setSoal(tmp);
                                                }}
                                            />
                                        </View>

                                    </View>
                                }


                                {item.tipe !== 'varchar(100)' &&
                                    <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center' }}>

                                        <MyRadio
                                            selected={item.jawab == 'Ya' ? true : false}
                                            onPress={() => {
                                                let tmp = [...soal];
                                                tmp[index].jawab = tmp[index].jawab == 'Ya' ? '' : 'Ya';
                                                setSoal(tmp);
                                            }}
                                        />



                                    </View>
                                }



                            </View>

                        </>
                    )
                }} />

                <View style={{
                    padding: 10,
                }}>
                    <MyButton onPress={sendServer} title="Simpan" />
                </View>
            </ScrollView>


        </View>
    );
}