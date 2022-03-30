import { SafeAreaView, ScrollView, StatusBar, StyleSheet, FlatList } from 'react-native';

import Topo from './source/telas/Carrinho/Topo'
import Detalhes from './source/telas/Carrinho/Detalhes'
import Item from './source/telas/Carrinho/Item';
import Texto from './source/components/Texto';
import ItemRodape from './source/telas/Carrinho/ItemRodape';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import Mocks from './source/mocks/carrinho'

export default function App() {

  const [fontsLoaded] = useFonts([
    Montserrat_400Regular,
    Montserrat_700Bold
  ])

  /*if(! fontsLoaded) return (
    <View>
      <Text>Fonts not loaded</Text>
    </View>
  )*/

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList 
        data={Mocks.itens.lista} 
        renderItem={Item}
        keyExtractor={item => item.nome}
        ListHeaderComponent={ () => 
          <>
            <Topo {...Mocks.topo} />
            <Detalhes {...Mocks.detalhes} />
            <Texto style={styles.titulo}>{Mocks.itens.titulo}</Texto>
          </>
        }
        ListFooterComponent={ () => 
          <FlatList style={styles.listaRodape}
            data={Mocks.listaRodape.itens}
            renderItem={ItemRodape}
            keyExtractor={item => item.texto}
          />
        }
      />

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titulo: {
    color: '#ffa500',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25
  },
  listaRodape: {
    width: '100%',
    backgroundColor: 'aliceblue'
  }
})