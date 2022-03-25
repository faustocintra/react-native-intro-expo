import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Topo from './source/telas/Carrinho/Topo'
import Detalhes from './source/telas/Carrinho/Detalhes'

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

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
      <Topo />
      <Detalhes/>
      
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})