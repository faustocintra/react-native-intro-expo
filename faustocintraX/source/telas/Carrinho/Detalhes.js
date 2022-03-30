import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import Texto from '../../components/Texto'



export default function Detalhes({detalhes, titulo, logoVendedor, nomeVendedor, desc, preco}) {
    return (
        <>
            <Texto style={styles.detalhes}>{detalhes}</Texto>
            <Texto style={styles.titulo}>{titulo}</Texto>
            <View style={styles.vendedor}>
                <Image source={logoVendedor} style={styles.logoVendedor} />
                <Texto style={styles.nomeVendedor}>{nomeVendedor}</Texto>
            </View>
            <Texto style={styles.desc}>{desc}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
        </>
    )
}

const styles = StyleSheet.create({
    detalhes: {
      fontWeight: "bold",
      fontSize: 25,
      lineHeight: 35,
      textAlign: 'center'
    },
    titulo: {
      color: "#ffa500",
      fontWeight: "bold",
      fontSize: 25,
      lineHeight: 35,
      textAlign: 'center'
    },
    nomeVendedor: {
      color: "#a3a3a3",
      fontSize: 18,
      marginLeft: 10
    },
    desc: {
      fontSize: 16,
      lineHeight: 26,
      paddingVertical: 10
    },
    preco: {
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'right',
      paddingHorizontal: 10
    },
    logoVendedor: {
      width: 32,
      height: 32,
      marginLeft: 30
    },
    vendedor: {
      flexDirection: 'row',
      padding: 10
    }
  });