import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
//importando imagem
import background from '../../assets/background.png'
import logo from '../../assets/logo.png'
import Error from '../../components/Error'

const botaoEsqueceuSenha = () => {
    Alert.alert('informar e-mail para envio da nova senha...  ')
}

function Login(props) {
    return (
        <ScrollView style={styles.contentContainer}>
            <ImageBackground source={background} style={styles.background} >
                <Image source={logo} style={styles.image}></Image>
                <Error icon='error' text='usuário já cadastrado' />
                <View style={styles.viewLogin}>
                    <View style={styles.sectionStyle}>
                        <Icon name="mail-outline" size={30} color='#fff' ></Icon>
                        <TextInput placeholder='Digite seu e-mail' placeholderTextColor='#fff' style={styles.Input}></TextInput>
                    </View>
                    <View style={styles.sectionStyle}>
                        <Icon name="lock-outline" size={30} color='#fff'></Icon>
                        <TextInput secureTextEntry={true} placeholder='Digite sua senha' placeholderTextColor='#fff' style={styles.Input}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Register')}>
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
        height: 615

    },
    viewLogin: {
        marginTop: 60,
        backgroundColor: '#2f3236',
        width: '95%',
        padding: 15,


    },
    Input: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: '90%'
    },
    button: {
        backgroundColor: "#fff",
        padding: 5,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 10,

    },
    image: {
        width: 300,
        height: 270,
        marginTop: 45
    },
    esqueceSenha: {
        marginTop: 5,
        color: '#000000',
        backgroundColor: 'transparent',
        textAlign: 'center',
        padding: 6,

    },
    sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: -10,

    },

})
export default Login