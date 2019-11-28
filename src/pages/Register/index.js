import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, Picker, handleSubmid } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RNPickerSelect from 'react-native-picker-select'
import background from '../../assets/background.png'
import logo from '../../assets/logo.png'
import Axios from 'axios'
import Error from '../../components/Error'


class Register extends React.Component {
    state = {
        user: {
        name: '',
        email: '',
        password: '',
        category: '',
        },
        error: false,
        errorText: ''
        

    }
    handleSubmid = async () => {
        const { data } = await Axios.post('http://10.51.47.63:3000/users', this.state.user)

        //verifica se foi retorna um error do nosso backend
        if(data.error){
            this.setState({error: true, errorText: data.error})
        }
    }
    render() {
        const {error, errorText} = this.state
        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.background}>
                    <View style={{ paddingRight: '85%' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name="keyboard-return" size={50} color='#000'></Icon>
                        </TouchableOpacity>
                    </View>
                    <Image source={logo} style={styles.image}></Image>
                    {
                        error &&  
                        <Error icon='error' text={errorText} />
                    }
                  
                    <View style={styles.viewLogin}>
                        <TextInput placeholder='Digite seu nome' placeholderTextColor='#000000' onChangeText={(text) => this.setState({user:{ ...this.state.user, name:text }})} style={styles.Input}></TextInput>
                        <TextInput placeholder='Seu e-mail@gmail.com' placeholderTextColor='#000000' onChangeText={(text) => this.setState({user: { ...this.state.user, email: text }})} style={styles.Input}></TextInput>
                        <TextInput secureTextEntry={true} placeholder='Digite sua Senha' placeholderTextColor='#000000' onChangeText={(text) => this.setState({user:{...this.state.user, password: text }})} style={styles.Input}></TextInput>
                        <View style={styles.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => this.setState({user: {...this.state.user, category: value }})}
                                items={[
                                    { label: 'Desenvolvedor', value: 'Desenvolvedor' },
                                    { label: 'PHP', value: 'PHP' },
                                    { label: 'Python', value: 'Python' },
                                ]} />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmid()}>
                            <Text style={{ color: '#fff' }}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        )

}}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        height: 615
    },
    image: {
        width: 340,
        height: 300,
        marginTop: -15
    },
    viewLogin: {
        marginTop: -5,
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
    },

})

export default Register