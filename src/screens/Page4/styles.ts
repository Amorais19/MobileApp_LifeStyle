import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyles'

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 350
    },
    conteudo: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'Slackey_400Regular',
        fontSize: 48,
        color: colors.white,
        paddingBottom: 30
    },
    texto: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 24
    },
    textnegrito: {
        color: colors.white,
        fontFamily: 'Slackey_400Regular'
    },
    botoes: {
        flexDirection: 'row',
        marginBottom: 25
    },
    botao: {
        paddingHorizontal: 15
    },
});