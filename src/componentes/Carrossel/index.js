import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, View } from "react-native";
import styles from "./styles";

export default function Carrossel({ data, duration = 2000 }) {
  const carrosselRef = useRef();
  const [index, setIndex] = useState(0);

  const alterPosition = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      return;
    }

    setIndex(0);
  };

  useEffect(() => {
    carrosselRef.current.scrollToIndex({ index })
    const timeout = setTimeout(() => alterPosition(), duration);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ref={carrosselRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Image
            source={item.imagem}
            style={[styles.image, index === data.length - 1 && styles.lastImage]}
            resizeMode="contain"
          />
        )}
      />
    </View>
  );
}
