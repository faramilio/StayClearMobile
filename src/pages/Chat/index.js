import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground} from 'react-native'
import background from '../../assets/op.png'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'


const DATA = [
    {
        id: 1,
        idUser: 1,
        msng: 'olá, meu nome é Anderson'
    },
    {
        id: 2,
        idUser: 2,
        msng: 'olá, meu nome  é JHOL'
    },
    {
        id: 1,
        idUser: 1,
        msng: 'tudo bem?'
    }

]

class Chat extends Component {
    render() {
        return (
            <React.Fragment>
            <ImageBackground source={background} style={styles.backgroudView}>
                <FlatList 
                data={DATA}
                renderItem={({item}) =>
                <React.Fragment>
                    {
                        item.idUser === 1 ? (
                            <View style={styles.friend}>
                                <Text style={styles.Colortext} >{item.msng}</Text>
                            </View>
                        ) : (
                            <View style={styles.my}>
                                <Text style={styles.colorText}>{item.msng}</Text>
                            </View>
                        )
                    }

                </React.Fragment>
            }
            keyExtractor = {item => item.id}
            />
            
           </ImageBackground>
           <View style={styles.viewSend}>
               <TextInput style={styles.inputMessage} placeholder= 'Mensagem' placeholderTextColor='#000000'/>
               <TouchableOpacity style={styles.buttonSend}>
                   <Icon size={40} style={styles.icon} name='send'/>
               </TouchableOpacity>
           </View>
           </React.Fragment>
        )
    }
}
const styles = StyleSheet.create ({
    backgroudView: {
        flex: 1,
    },
    friend: {
        marginTop: 5,
        marginBottom: 5,
        padding: 20,
        width: '50%',
        borderRadius: 20,
        backgroundColor: '#dbd7d7',
        left: 180
    },
    my: {
        marginTop: 5,
        marginBottom: 5,
        padding: 20,
        width: '50%',
        borderRadius: 20,
        backgroundColor:'#5c5656'
    },
    colorText: {
        color: '#fff'
    },
    viewSend: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
    },
    inputMessage: {
        width: '85%',
        paddingLeft: 20,
        borderRadius: 100,
        backgroundColor: '#676280'
    },
    buttonSend: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderRadius: 100,

    },
    icon: {
        marginTop: 5
    }
})
export default Chat


