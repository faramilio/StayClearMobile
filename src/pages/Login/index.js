import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
//importando imagem
import background from '../../pages/assets/background.png'
import logo from '../../pages/assets/logo.png'

const botaoEsqueceuSenha = () => {
    Alert.alert('informar e-mail para envio da nova senha...  ')
}

function Login() {
    return (
        <ScrollView style={styles.contentContainer}>
            <ImageBackground source={background} style={styles.background} >
                <Image source={logo} style={styles.image}></Image>
                <View style={styles.viewLogin}>
                    <View style={styles.sectionStyle}>
                        <Icon name="mail-outline" size={30} color='#fff'></Icon>
                        <TextInput placeholder='Digite seu e-mail' placeholderTextColor='#fff' style={styles.Input}></TextInput>
                    </View>
                    <View>
                        <Icon name="lock-outline" size={30} color='#fff'></Icon>
                        <TextInput secureTextEntry={true} placeholder='Digite sua senha' placeholderTextColor='#fff' style={styles.Input}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text >Registrar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.esqueceSenha} onPress={botaoEsqueceuSenha}>
                        <Text>Esqueceu Senha</Text>
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
    viewLogin: {
        marginTop: 40,
        backgroundColor: '#2f3236',
        width: '95%',
        padding: 15,


    },
    Input: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1
    },
    button: {
        backgroundColor: "#fff",
        padding: 5,
        marginTop: 10,
        alignItems: 'center'

    },
    image: {
        width: 300,
        height: 270,
        marginTop: 40
    },
    esqueceSenha: {
        marginTop: 10,
        color: '#000000',
        backgroundColor: 'transparent',
        textAlign: 'center',
        padding: 6,

    },
    contentContainer: {
        flex: 1,
    },
    sectionStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inconStyle: {
        position: 'absolute',
        paddingRight: 280,
        resizeMode: 'stretch',
        fontSize: 30
    }

})
export default Login