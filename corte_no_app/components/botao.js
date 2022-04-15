import React from "react";
import { View, Button } from "react-native";

export default function Botao() {
  return (
    <View>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
