import React from "react";
import { View, Image } from "react-native";
import styles from "../CardConsulta/styles";

import shimmerGif from "../../assets/shimmer.gif";

export function CardConsultaShimmer() {
  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image
          source={shimmerGif}
          style={[styles.foto, { overlayColor: "#fff" }]}
        />
        <View style={styles.informacoes}>
          <Image source={shimmerGif} style={{ width: 200, height: 25 }} />
          <View style={styles.consultaArea}>
            <Image
              source={shimmerGif}
              style={{ width: 100, height: 15, marginTop: 5 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
        <Image source={shimmerGif} style={{ width: 100, height: 15 }} />
        <View style={styles.botoesArea}>
          <Image source={shimmerGif} style={{ width: "100%", height: 50, borderRadius: 10, overlayColor: '#fff' }} />
        </View>
      </View>
    </View>
  );
}
