import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts } from '../../utils'
import { MyGap, MyHeader, MyInput } from '../../components'
import { Image } from 'react-native'
import { getData } from '../../utils/localStorage'

export default function TambahChecklist({ navigation }) {
    const handleBack = () => {
        navigation.goBack()
    }
    const [minggu, setMinggu] = useState('');
    const [user, setUser] = useState({
        id: ''
    });

    useEffect(() => {
        getData('user').then(uu => { setUser(uu) })
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <MyHeader onPress={handleBack} judul="Checklist" />
            <ScrollView>
                <View style={{ padding: 10, }}>

                    <View style={{ padding: 10 }}>
                        <MyInput onChangeText={x => setMinggu(x)} keyboardType="numeric" placeholder="Isi disini" label="Minggu ke-" />
                    </View>

                    {minggu.length > 0 &&
                        <View style={{ padding: 10 }}>
                            <TouchableNativeFeedback onPress={() => navigation.navigate("CheklistIbuHamil", {
                                minggu_ke: minggu,
                                fid_user: user.id
                            })}>
                                <View style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, }}>
                                    <Text style={{
                                        fontFamily: fonts.primary[600], color: colors.primary, textAlign: 'center',
                                        fontSize: 20,
                                    }}>Ibu Hamil</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <MyGap jarak={20} />
                            <TouchableNativeFeedback onPress={() => navigation.navigate("CheklistIbuMelahirkan", {
                                minggu_ke: minggu,
                                fid_user: user.id
                            })}>
                                <View style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, }}>
                                    <Text style={{
                                        fontFamily: fonts.primary[600], color: colors.primary, textAlign: 'center',
                                        fontSize: 20,
                                    }}>Ibu Melahirkan</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <MyGap jarak={20} />
                            <TouchableNativeFeedback onPress={() => navigation.navigate("CheklistIbuMenyusui", {
                                minggu_ke: minggu,
                                fid_user: user.id
                            })}>
                                <View style={{ padding: 10, backgroundColor: colors.secondary, borderRadius: 10, }}>
                                    <Text style={{
                                        fontFamily: fonts.primary[600], color: colors.primary, textAlign: 'center',
                                        fontSize: 20,
                                    }}>Ibu Menyusui</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    }

                </View>
            </ScrollView>

        </View>
    )
}