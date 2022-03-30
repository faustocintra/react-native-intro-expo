import React from 'react'
import Texto from '../../components/Texto'
import { View, Image, StyleSheet } from 'react-native'

export default function ItemRodape({item: {texto}}) {

    return (
        <View style={styles.item} key={texto}>
            <Texto style={styles.nome}>{texto}</Texto>
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        width: '100%'
    },
    texto: {
        fontSize: 12,
        color: '#464646',
        marginLeft: 15,
        lineHeight: 15,
        width: '100%',
        textAlign: 'center'
    }
  })