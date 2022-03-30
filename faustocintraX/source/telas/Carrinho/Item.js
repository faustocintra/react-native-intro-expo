import React from 'react'
import Texto from '../../components/Texto'
import { View, Image, StyleSheet } from 'react-native'

export default function Item({item: {nome, imagem}}) {

    return (
        <View style={styles.item} key={nome}>
            <Texto style={styles.nome}>{nome}</Texto>
            <Image style={styles.imagem} source={imagem} />
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 15,
        alignItems: 'center'
    },
    imagem: {
        width: 50,
        height: 50
    },
    nome: {
        fontSize: 18,
        color: '#464646',
        marginLeft: 15,
        lineHeight: 15
    }
  })