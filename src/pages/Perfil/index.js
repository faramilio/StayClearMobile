import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, Picker } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Axios from 'axios'

import Icon from 'react-native-vector-icons/MaterialIcons'
import perfil from '../../assets/perfil.png'
import background from '../../assets/background.png'
import AsyncStorage from '@react-native-community/async-storage'

class Perfil extends React.Component {
    //nosso state
    state = {
        //ele, ira armazenar o caminho nosso avatar ni smartphone
        photo: '',
        token: '',
        telephone: '',
        description: '',
    }

    //Didmount = ele é executado após nossa rederização
    async componentDidMount() {
        const user = await AsyncStorage.getItem('user')

        //tramsformando nossa string em objeto
        const { userExists, token } = JSON.parse(user)

        //setando id do nosso usuario no estado
        this.setState({ id: userExists.id, token: token })
    }

    async handleSubmid() {
        //enviando dados do nosso usuario para rota de autenticação
        const { id, token } = this.state

        //enviamos nossos proprietarios do state para nossa rota de update
        const { data } = await Axios.put(`http://10.51.47.63:3000/users/${id}`, this.state, {
            headers: { Authorization: "Bearer " + token }
        })

        console.log(data)
    }
    //alterando imagem do perfil
    handlerchooseAvatar() {
        ImagePicker.showImagePicker(response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source =  response.uri ;

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    photo: source,
                });
            }
        });
    }
    render() {
        //pegando o nosso avatar dentro do state
        const { photo } = this.state
        return (

            <View>
                <TouchableOpacity style={styles.Voltar} onPress={() => this.props.navigation.navigate('Login')}>
                    <Icon style={{ color: '#fff' }} name='home' size={45}></Icon>
                </TouchableOpacity >
                <ScrollView>
                    <ImageBackground source={background} style={styles.background}>
                        <TouchableOpacity onPress={() => this.handlerchooseAvatar()}>
                            {
                                photo ? (
                                    <Image source={ { uri: photo } } style={styles.image}></Image>
                                ) : (
                                        <Image source={perfil} style={styles.image}></Image>
                                    )
                            }
                        </TouchableOpacity>
                        <Text style={{ padding: 20, marginTop: -5, fontSize: 25, fontWeight: 'bold' }}>PERFIL PROFISSIONAL</Text>
                        <View style={styles.textAreaContainer}>
                            <TextInput onChangeText={(text) => this.setState({ description: text })} placeholder='Digite aqui o seu perfil' placeholderTextColor='#000000' style={styles.textArea} numberOfLines={10} multiline={true} ></TextInput>
                        </View>
                        <Text style={{ padding: 20, fontSize: 22, fontWeight: 'bold' }}>Contato</Text>
                        <View style={styles.sectionStyle}>
                            <Icon name="call" size={30} color='#000'></Icon>
                            <TextInput onChangeText={(text) => this.setState({ telephone: text })} placeholder='Digite seu telefone' placeholderTextColor='#000' style={styles.Input}></TextInput>
                        </View>
                        <TouchableOpacity onPress={() => this.handleSubmid()} style={styles.button}>
                            <Text style={{ color: '#fff', fontSize: 20, }}>Salvar</Text>
                        </TouchableOpacity>
                    </ImageBackground>


                </ScrollView>

            </View>
        )

    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        height: 725
    },
    image: {
        width: 250,
        height: 250,
        marginTop: 25,
        borderRadius: 200
    },
    button: {
        backgroundColor: "#2f3236",
        padding: 10,
        marginTop: 15,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center'
    },
    textAreaContainer: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 1,
        width: '80%',
    },
    textArea: {
        height: 120,
        alignItems: 'flex-start',
    },
    sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: -10,
    },
    Input: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        width: "70%",
        textAlign: 'center',
        right: 15
    },
    Voltar: {
        backgroundColor: '#2f3236',
        padding: 8
    }
})


export default Perfil