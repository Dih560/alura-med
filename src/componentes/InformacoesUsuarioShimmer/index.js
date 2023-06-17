import React from "react";
import { View, Image } from "react-native";
import styles from "../InformacoesUsuario/styles";

import shimmerGif from '../../assets/shimmer.gif';

export function InformacoesUsuarioShimmer() {
  return (
    <View style={styles.container}>
      <Image source={shimmerGif} style={[styles.foto, { overlayColor: 'rgba(248,244,255,0.8)' }]} />
      <View style={styles.informacoes}>
        <Image source={shimmerGif} style={{ width: 100, height: 25 }} />
        <Image source={shimmerGif} style={{ width: 200, height: 15, marginTop: 5 }} />
      </View>
    </View>
  );
}