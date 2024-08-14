import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Modal, TouchableOpacity, Image, FlatList } from 'react-native';
import { colors, fonts } from '../../utils';
import { MyButton, MyHeader, MyRadio } from '../../components';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import moment from 'moment';

export default function Detail({ route, navigation }) {

    const ITEM = route.params;

    const handleBack = () => {
        navigation.goBack()
    }

    const [soal, setSoal] = useState([]);

    useEffect(() => {
        __getSoal();
        __getData();
    }, []);



    const __getSoal = () => {
        axios.post(apiURL + 'get_kolom', {
            table: route.params.table
        }).then(res => {

            setSoal(res.data);

        })
    }
    const [data, setData] = useState([]);

    const __getData = () => {
        axios.post(apiURL + 'get_data', {
            table: route.params.table,
            id: route.params.id
        }).then(res => {
            console.log(res.data);
            setData(res.data);

        })
    }

    const [kirim, setKirim] = useState({
        fid_user: route.params.fid_user,
        minggu_ke: route.params.minggu_ke,
    })
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <MyHeader onPress={handleBack} judul={'Checklist ibu ' + ITEM.table} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F5FCFF', }}>
                <Text style={{
                    fontFamily: fonts.primary[600],
                    fontSize: 20,
                    textAlign: 'center',
                }}>Minggu ke {route.params.minggu_ke}</Text>
                <Text style={{
                    fontFamily: fonts.primary[400],
                    fontSize: 14,
                    textAlign: 'center',
                    marginBottom: 20,
                }}>Tanggal {moment(route.params.tanggal).format('DD MMMM YYYY')}</Text>

                <FlatList data={soal} renderItem={({ item, index }) => {
                    return (


                        <View style={{
                            marginHorizontal: 10,
                            borderBottomWidth: 1,
                            marginVertical: 5, borderBottomColor: colors.border, paddingHorizontal: 4, flexDirection: "row", alignItems: 'center'
                        }}>
                            <View style={{ padding: 4, width: '70%' }}>

                                <Text style={{ fontFamily: fonts.primary[400], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>
                                    {item.soal}
                                </Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ fontFamily: fonts.primary[800], textAlign: 'justify', fontSize: 12, color: colors.tekscolor }}>{data[item.kolom]}</Text>
                            </View>



                        </View>


                    )
                }} />


            </ScrollView >


        </View >
    );
}