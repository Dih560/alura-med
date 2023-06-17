import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import { CardConsulta } from "../../componentes/CardConsulta";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import soniaFoto from "../../assets/sonia.png";
import pacientes from "./pacientes";
import styles from "./styles";
import { CardConsultaShimmer } from "../../componentes/CardConsultaShimmer";
import { InformacoesUsuarioShimmer } from "../../componentes/InformacoesUsuarioShimmer";

export default function Principal({ navigation }) {
  const [time, setTime] = useState(false);

  useEffect(() => {
    setTimeout(() => setTime(true), 3000);
  }, []);

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        {time ? (
          <InformacoesUsuario
            nome="Olá Sônia"
            detalhes="Mais 4 consultas hoje"
            foto={soniaFoto}
          />
        ) : (
          <InformacoesUsuarioShimmer />
        )}

        <Text style={styles.texto}>Hoje</Text>

        {time ? (
          <FlatList
            data={pacientes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detalhes", item)}
              >
                <CardConsulta {...item} />
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <>
            <CardConsultaShimmer />
            <CardConsultaShimmer />
            <CardConsultaShimmer />
            <CardConsultaShimmer />
          </>
        )}
      </View>
    </TelaDeFundo>
  );
}
