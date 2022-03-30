import imagem from '../../assets/topo.png'
import logoVendedor from '../../assets/logo.png'
import antena2g from '../../assets/Itens/antena2g3g.png'
import antenaWifi from '../../assets/Itens/antenaWifi.png'
import modem from '../../assets/Itens/modem.png'
import nodeMcu from '../../assets/Itens/nodeMcu.png'

const carrinho = {
    topo: {
        titulo: 'Carrinho',
        imagem: imagem
    },
    detalhes: {
        detalhes: 'Detalhes do carrinho',
        titulo: 'Kit IoT',
        logoVendedor: logoVendedor,
        nomeVendedor: 'Nuvem\'s Shopping',
        desc: 'Um kit IoT que revoluciona a vida dos estudantes',
        preco: 'R$ 99,00'
    },
    itens: {
        titulo: 'Itens do carrinho',
        lista: [
            {
                nome: 'Antena 2G/3G',
                imagem: antena2g
            },
            {
                nome: 'Antena Wifi',
                imagem: antenaWifi
            },
            {
                nome: 'Modem',
                imagem: modem
            },
            {
                nome: 'Node MCU',
                imagem: nodeMcu
            }
        ]
    },
    listaRodape: {
        itens: [
            { texto: 'Treinamento React Native Expo' },
            { texto: 'Aluno: Fausto Gonçalves Cintra' },
            { texto: 'professor@faustocintra.com.br' },
            { texto: 'Faculdade de Tecnologia "Dr. Thomaz Novelino" - Fatec Franca'}
        ]
    }
}

export default carrinho