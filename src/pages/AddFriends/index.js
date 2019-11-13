import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, Picker } from 'react-native'
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import IconIcons from 'react-native-vector-icons/MaterialIcons'
import Iconcomunity from 'react-native-vector-icons/MaterialCommunityIcons'
import perfil from '../../pages/assets/perfil.png'
import background from '../../pages/assets/background.png'

class AddFriends extends React.Component {
    render() {
        return (
                <ImageBackground source={background} style={styles.back}>
                    <Image source={perfil} style={styles.image} />
                    <View style={styles.userInfo}>
                        <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 20, marginTop: 5, color: '#fff' }}>Anderson Giovani Faramilio</Text>
                        <View>
                            <Text style={styles.userBi}>
                                E ai galerinha bora bater uma papo pra desvolver algo em grupo !!
                        </Text>
                        </View>
                    </View >
                    <View style={styles.icone}>
                        <TouchableOpacity>
                            <IconAwesome name='user-plus' style={styles.box} color='#45fc03' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('teste')}>
                            <IconAwesome name='user-times' style={styles.box} color='#fc0303' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Iconcomunity name='reload' style={styles.box} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    back: {
        flex: 1,
        height: 700,
        alignItems: 'center'
    },
    image: {
        width: '97%',
        height: 350,
        marginTop: 25,
    },
    icone: {
        marginTop: 25,
        flexDirection: 'row',
        width:'100%',
        height: 50,
        justifyContent: 'space-around'
    },
    box: {
        fontSize: 45,
        

    },
    userInfo: {
        backgroundColor: '#2f3236',
        width: '97%',
        height: 130,
    },
    userBi: {
        marginTop: 10,
        color: '#fff',
        left: 10
    
    },
})
export default AddFriends