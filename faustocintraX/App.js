


import { StyleSheet, Text, SafeAreaView, StatusBar, Image, Dimensions, View } from 'react-native';
import imagem from './assets/topo.png'
import logoVendedor from './assets/logo.png'

const screenWidth = Dimensions.get('screen').width


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={imagem} style={styles.topo} />
      <Text style={styles.tituloCarrinho}>Carrinho</Text>
      <Text style={styles.detalhes}>Detalhes do carrinho</Text>
      <Text style={styles.titulo}>Kit IoT</Text>
      <View style={styles.vendedor}>
        <Image source={logoVendedor} style={styles.logoVendedor} />
        <Text style={styles.nomeVendedor}>Nuvem's Shopping</Text>
      </View>
      <Text style={styles.desc}>Um kit IoT que revoluciona a vida dos estudantes</Text>
      <Text style={styles.preco}>R$ 99,00</Text>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
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
  },
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