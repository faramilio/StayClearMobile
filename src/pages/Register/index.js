import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, Picker } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import background from '../../pages/assets/background.png'
import logo from '../../pages/assets/logo.png'
function Register() {
    return (
        <ScrollView>
            <ImageBackground source={background} style={styles.background}>
                <Image source={logo} style={styles.image}></Image>
                <View style={styles.viewLogin}>
                    <TextInput placeholder='Digite seu nome' placeholderTextColor='#000000' style={styles.Input}></TextInput>
                    <TextInput placeholder='Seu e-mail@gmail.com' placeholderTextColor='#000000' style={styles.Input}></TextInput>
                    <TextInput secureTextEntry={true} placeholder='Digite sua Senha' placeholderTextColor='#000000' style={styles.Input}></TextInput>
                    <View style={styles.picker}>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Desenvolvedor', value: 'Desenvolvedor' },
                                { label: 'PHP', value: 'PHP' },
                                { label: 'Python', value: 'Python' },
                            ]} />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: '#fff' }}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        height: 700
    },
    image: {
        width: 340,
        height: 300,
        marginTop: 20
    },
    viewLogin: {
        marginTop: 5,
        padding: 10,
        width: '95%',

    },
    button: {
        backgroundColor: "#2f3236",
        padding: 18,
        marginTop: 5,
        alignItems: 'center',
        borderRadius: 10
    },
    Input: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1
    },
    picker: {
        marginTop: 10,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
    }

})

export default Register