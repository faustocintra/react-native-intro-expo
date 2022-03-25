import { StyleSheet, Text, SafeAreaView, StatusBar, Image, Dimensions, View } from 'react-native';
import topImg from './assets/personal-profile.jpg'
import locationIcon from './assets/location.webp'
import emailIcon from './assets/email.png'

const screenWidth = Dimensions.get('screen').width

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={topImg} style={styles.topImg} />
      <Text style={styles.name}>Fausto G. Cintra</Text>
      <View style={styles.innerContainer}>
        
        <Text style={styles.occupation}>Professor de Ensino Superior</Text>
        
        <View style={styles.horizontal}>
          <Image source={locationIcon} style={styles.icon} />
          <Text style={styles.location}>Faculdade de Tecnologia de Franca - Dr. Thomaz Novelino</Text>
        </View>
        
        <View style={styles.horizontal}>
          <Image source={emailIcon} style={styles.icon} />
          <Text style={styles.email}><a href="mailto:professor@faustocintra.com.br">professor@faustocintra.com.br</a></Text>
        </View>
        
        <Text style={styles.resume}><a href="http://lattes.cnpq.br/5529456425773756">Currículo Lattes</a></Text>
        
      </View>
      
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  topImg: {
    width: '100%',
    height: 582 / 772 * screenWidth
  },
  name: {
    position: 'absolute',
    textAlign: 'center',
    paddingVertical: 60,
    fontSize: 50,
    fontWeight: 'bold',
    width: '100%'
  },
  icon: {
    width: 32,
    height: 32
  },
  innerContainer: {
    padding: 20
  },
  occupation: {
    textAlign: 'center',
    color: '#444',
    fontSize: 26,
    lineHeight: 40
  },
  horizontal: {
    flexDirection: 'row'
  },
  location: {
    fontWeight: 'bold',
    color: '#FF5722',
    lineHeight: 32,
    marginLeft: 10,
    width: '100%',
    marginBottom: 10
  },
  email: {
    fontFamily: 'monospace',
    lineHeight: 32,
    marginLeft: 10,
    width: '100%',
    marginBottom: 10
  },
  resume: {
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 25
  }

});