import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import Icon from "react-native-vector-icons/MaterialIcons";
import mapa from "../../assets/mapa.png";
import styles from "./styles";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";

export default function Detalhes(props) {
  const [bellAnimated, setBellAnimated] = useState(false);
  const dados = props.route.params;
  const configTimeAnimation = {
    duration: 120,
    repeat: 4,
  };
  const rotation = useSharedValue(0);
  const angle = -30;
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`
      },
    ]
  }));

  const handleChime = () => {
    if (!bellAnimated) {
      rotation.value = withRepeat(withTiming(angle, { duration: configTimeAnimation.duration }), configTimeAnimation.repeat, true)
      setTimeout(() => setBellAnimated(true), (configTimeAnimation.duration * configTimeAnimation.repeat))
    }
  }

  return (
    <TelaDeFundo>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <InformacoesUsuario
          nome={dados.nome}
          detalhes="Cliente desde 2018"
          foto={dados.foto}
        />
        <View style={styles.detalhesMedia}>
          <View style={styles.media}>
            <Text style={styles.subtitulo}>Tempo médio de cada consulta</Text>
            <View style={[styles.circulo, { borderColor: "#FFB050" }]}>
              <Text style={styles.circuloTexto}>52 min</Text>
            </View>
          </View>
          <View style={styles.media}>
            <Text style={styles.subtitulo}>Número de consultas</Text>
            <View style={styles.circulo}>
              <Text style={styles.circuloTexto}>22</Text>
            </View>
          </View>
        </View>

        <Text style={styles.subtitulo}>Anotações sobre a paciente</Text>
        <Text style={styles.detalhes}>{dados.sobre}</Text>

        <Text style={styles.subtitulo}>Endereço</Text>
        <Image style={styles.imagemMapa} source={mapa} />
        <Text>{dados.endereco}</Text>
        <TouchableOpacity style={styles.botao} onPress={handleChime}>
          <Text style={styles.botaoTexto}>Notificar consulta</Text>
          <Animated.View style={animatedStyle}>
            <Icon name={`notifications${!bellAnimated ? '-none' : ''}`} size={20} color="#FFF" />
          </Animated.View>
        </TouchableOpacity>
      </ScrollView>
    </TelaDeFundo>
  );
}
