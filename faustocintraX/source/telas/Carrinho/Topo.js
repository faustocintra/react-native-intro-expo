import React from 'react'
import { Image, Text, StyleSheet, Dimensions } from 'react-native'

import Texto from '../../components/Texto'

const screenWidth = Dimensions.get('screen').width

export default function Topo({titulo, imagem}) {
    return (
        <>
            <Image source={imagem} style={styles.topo}  />
            <Texto style={styles.tituloCarrinho}>{titulo}</Texto>
        </>
    )
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 582 / 772 * screenWidth
      },
      tituloCarrinho: {
        position: 'absolute',
        paddingVertical: 60,
        textAlign: "center",
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 40
      }
})