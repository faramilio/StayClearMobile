import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, Picker, FlatList } from 'react-native'
import background from '../../assets/background.png'

const DATA = [{
    id: 1,
    avatar: 'https://imagensemoldes.com.br/wp-content/uploads/2018/05/Meu-Malvado-Favorito-Minions-14-PNG.png',
    name: 'Anderson',
    msg: 'que muito loco brow'
},
{
    id: 2,
    avatar: 'https://uploaddeimagens.com.br/images/000/647/882/original/image1431558945.png?1466744894',
    name: 'caio',
    msg: 'que muito loco brow'
},
{
    id: 3,
    avatar: 'http://www.imagenspng.com.br/wp-content/uploads/2017/04/unicornio-44.png',
    name: 'Fernando Salgado',
    msg: 'quero salgado amanhã'
},
{
    id: 4,
    avatar: 'https://myrealdomain.com/images/imagens-png-4.png',
    name: 'Kaique ovo',
    msg: 'bora pro alma amanha toma umas?'
},
{
    id: 5,
    name: 'Juliano Mazeu',
    avatar: 'https://freepngimg.com/thumb/yoshi/21749-5-yoshi-file.png',
    msg: 'bora comer uma pizza?'
}
];

function Item({avatar, name, msg }) {
    return (
        <View style={styles.item}>
            <Image source={{uri: avatar}} style={styles.image}/>
            <View>
                <Text style={{fontSize: 25, left: 10}}>{name}</Text>
                <Text style={{fontSize: 15, left: 10, marginTop: 15}}>{msg}</Text>
            </View>

        </View>
    );
}



class Conversation extends React.Component {
    render() {
        return (
            <ImageBackground source={background} style={styles.ImageBackgroundView}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item avatar={item.avatar} name={item.name} msg={item.msg}/>}
                    keyExtractor={item => item.id}
                />
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    ImageBackgroundView: {
        flex: 1,
        alignItems: 'center',
        height: 615

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 7,
        marginHorizontal: 5,
        flexDirection: 'row',
        borderRadius: 25
    },
    image: {
        width: 68,
        height: 68,
        right: 15
    },
})
export default Conversation