import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
//importando imagem
import background from '../../assets/background.png'
import logo from '../../assets/logo.png'
import Error from '../../components/Error'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import { identifier } from '@babel/types'



const botaoEsqueceuSenha = () => {
    Alert.alert('informar e-mail para envio da nova senha...  ')
}



class Login extends React.Component {
    state = {
    email: '',
    password: '',
    error: false,
    errorText: '',
    }
    handleSubmid = async () => {
        //enviando dados do nosso usuario para rota de autenticação
        const { data } = await Axios.post('http://10.51.47.63:3000/auth', {
            email: this.state.email,
            password: this.state.password
        })
        //passando os dados do usuário para armazenar no local storage
        if(data.token) {
        this.SetStorage (data)
        }
   

        if (data.error) {
            this.setState({error: true, errorText: data.error
            })
        }
    }

    //armazenar dados do nosso usuario no local storage 
    SetStorage = async (data) => {
        //armazena nossos dados dentro do key @user
        await AsyncStorage.setItem('user', JSON.stringify(data) )
        this.props.navigation.navigate('Perfil')
    }


    render(){
        const {error, errorText} = this.state
        return (
            <ScrollView style={styles.contentContainer}>
                <ImageBackground source={background} style={styles.background} >
                    
                    <Image source={logo} style={styles.image}></Image>
                    {
                        error &&  
                        <Error icon='error' text={errorText} />
                    }
                    <View style={styles.viewLogin}>
                        <View style={styles.sectionStyle}>
                            <Icon name="mail-outline" size={30} color='#fff' ></Icon>
                            <TextInput onChangeText={(text) => this.setState({email: text})} placeholder='Digite seu e-mail' placeholderTextColor='#fff' style={styles.Input}></TextInput>
                        </View>
                        <View style={styles.sectionStyle}>
                            <Icon name="lock-outline" size={30} color='#fff'></Icon>
                            <TextInput onChangeText={(text) => this.setState({password: text})} secureTextEntry={true} placeholder='Digite sua senha' placeholderTextColor='#fff' style={styles.Input}></TextInput>
                        </View>
                        <TouchableOpacity onPress={() => this.handleSubmid()} style={styles.button}>
                            <Text >Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
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
}
        
    const styles = StyleSheet.create({
        background: {
            flex: 1,
            alignItems: 'center',
            height: 720

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