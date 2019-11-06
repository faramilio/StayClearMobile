import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, Picker } from 'react-native'
import ImagePicker from 'react-native-image-picker' 
import Icon from 'react-native-vector-icons/MaterialIcons'
import perfil from '../../pages/assets/perfil.png'
import background from '../../pages/assets/background.png'

class Perfil extends React.Component{
    //nosso state
    state ={
            avatar: perfil,
            name: 'Anderson',
            age: ' 26'

        }
        //alterando imagem do perfil
        handlerchooseAvatar() {
            this.setState({
                name: 'Juninho ',
                age: 28
            })
        }
    render(){
        //pegando o nosso avatar dentro do state
        const {avatar, name, age} = this.state
         return(
      
<View>
    <ScrollView>
    <ImageBackground source={background} style={styles.background}>
        <Text>{name + age}</Text>
        <TouchableOpacity onPress={() => this.handlerchooseAvatar ()}>
               <Image source={avatar} style={styles.image}></Image>
        </TouchableOpacity>
    <Text style={{padding: 10, marginTop: -5, fontSize: 25, fontWeight:'bold'}}>PERFIL PROFISSIONAL</Text>
    <View style={styles.textAreaContainer}>
    <TextInput  placeholder='Digite aqui o seu perfil' placeholderTextColor='#000000' style={styles.textArea} numberOfLines={10} multiline={true} ></TextInput>
    </View>
    <Text style={{padding: 20, fontSize: 22, fontWeight:'bold'}}>Contato</Text>
    <View style={styles.sectionStyle}>
    <Icon name="call" size={30} color='#000'></Icon>
    <TextInput placeholder='Digite seu telefone' placeholderTextColor='#000' style={styles.Input}></TextInput>
    </View>
    <TouchableOpacity style={styles.button}>
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
        height: 615
    },
    image: {
        width: 240,
        height: 240,
        marginTop: 20,
        borderRadius: 200
    },
    button: {
        backgroundColor: "#2f3236",
        padding: 10, 
        marginTop: 15,
        borderRadius: 10,
        width:'90%',
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
        marginBottom: 5,
        marginTop: -10,
    },
    Input: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        width: "70%",
        textAlign: 'center',
        right: 15
    }
    })


 export default Perfil