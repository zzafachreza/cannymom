import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Modal, TouchableOpacity, Image, FlatList } from 'react-native';
import { colors, fonts } from '../../utils';
import { MyButton, MyHeader, MyRadio } from '../../components';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';

export default function EditMenyusui({ route, navigation }) {
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

            let sql = `UPDATE data_menyusui SET
            ${soal.map(i => {
                return `${i.kolom}='${i.jawab}'`
            })}
          
          WHERE id_menyusui='${ID}'
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
            table: 'menyusui'
        }).then(res => {
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
            <MyHeader onPress={handleBack} judul="Checklist Ibu Menyusui" />
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
                            {item.kolom == 'kesehatan_2' &&

                                <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
                                    1)	Periode Nifas
                                </Text>
                            }

                            {item.kolom == 'kesehatan_15' &&

                                <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
                                    2) Periode Menyusui
                                </Text>
                            }

                            {item.kolom == 'sunnah_1' &&

                                <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', fontSize: 20, color: colors.tekscolor }}>
                                    3) Sunnah Ibu
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