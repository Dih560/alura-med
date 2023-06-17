import React from "react";
import { View } from "react-native";
import styles from "./styles";

import splash from "../../assets/splash-aluramed.json";
import AnimatedLottieView from "lottie-react-native";

export default function SplashScreen({ navigation }) {
  const handleContinue = () => navigation.reset({
    index: 0,
    routes: [{name: 'Onboarding'}]
  });

  return (
    <View style={styles.container}>
      <AnimatedLottieView
        source={splash}
        loop={false}
        autoPlay
        onAnimationFinish={handleContinue}
      />
    </View>
  );
}
