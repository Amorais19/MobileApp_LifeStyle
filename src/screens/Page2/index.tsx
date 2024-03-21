import { ImageBackground, View, Text, Image } from "react-native";
import { ButtonSlide } from "../../components/ButtonSlide";
import { styleContainer } from "../../styles/globalstyles";
import { styles } from "./styles"
import { IPagina } from "../../../App";

export function Page2({ setPageI }: IPagina) {
    const fundo = require('../../assets/fundo.png')
    const list = require('../../assets/lista.png')
    return (
        <ImageBackground source={fundo} style={styleContainer.container}>
            <View style={styles.flex}>
                <View style={styles.conteudo}>
                    <Text style={styles.title}>Life Style</Text>
                    <Image source={list} />
                    <Text style={styles.texto}>Organize sua agenda, marque seus compromissos....</Text>
                </View>
            </View>
            <View style={styles.botoes}>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false} />
                </View>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={true} />
                </View>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false} />
                </View>
                <View style={styles.botao}>
                    <ButtonSlide onPressI={() => setPageI(4)} cor={false} />
                </View>
            </View>
        </ImageBackground>
    )
}