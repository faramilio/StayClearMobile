import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Error( props){
    return(
        <View style={styles.Text}>
            <Icon name={props.icon} size={30} style={{right: 10,}}></Icon>
            <Text style={{color: '#fff' }}>{props.text}</Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    Text: {
        backgroundColor: "#f70707",
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        width: '95%',
        flexDirection:'row',
        justifyContent: 'center'
    }


})
export default Error
