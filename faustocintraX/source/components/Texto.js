import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Texto(props) {

    const {children, style} = props

    let estilo = styles.texto

    if(style?.fontWeight === 'bold') estilo = styles.textoNegrito

    return (
        <Text style={[style, estilo]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'Montserrat_400Regular',
        fontWeight: 'normal'
    },
    textoNegrito: {
        fontFamily: 'Montserrat_700Bold',
        fontWeight: 'bold'
    }
})