import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import Texto from '../../components/Texto'

import logoVendedor from '../../../assets/logo.png'

export default function Detalhes() {
    return (
        <>
            <Texto style={styles.detalhes}>Detalhes do carrinho</Texto>
            <Texto style={styles.titulo}>Kit IoT</Texto>
            <View style={styles.vendedor}>
                <Image source={logoVendedor} style={styles.logoVendedor} />
                <Texto style={styles.nomeVendedor}>Nuvem's Shopping</Texto>
            </View>
            <Texto style={styles.desc}>Um kit IoT que revoluciona a vida dos estudantes</Texto>
            <Texto style={styles.preco}>R$ 99,00</Texto>
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