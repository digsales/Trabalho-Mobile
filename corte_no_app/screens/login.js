import React from "react";
import { View, Text, Button, TextInput, StyleSheet, Image } from "react-native";

export default function Login() {
  return (
    <View style={estilo.body}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={estilo.logo}
          source={require("corte_no_app/assets/logo.png")}
        />
      </View>
      <Text style={estilo.label}>Email</Text>
      <TextInput style={estilo.input} placeholder="Coloque seu email" />
      <Text style={estilo.label}>Senha</Text>
      <TextInput
        style={estilo.input}
        secureTextEntry={true}
        placeholder="Coloque sua senha"
      />
      <View style={estilo.button}>
        <Button mode="containded" color={"orange"} title="entrar" />
      </View>
      <Text style={estilo.recuperacao}>ESQUECI A SENHA</Text>
      <Text style={estilo.cadastro}>
        Não tem cadastro? <Text style={{ color: "orange" }}>Inscreva-se</Text>
      </Text>
    </View>
  );
}
// Criação dos estilos
const estilo = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    padding: 16,
    backgroundColor: "black",
  },
  logo: {
    resizeMode: "contain",
    height: 283.7,
    width: 194,
  },
  label: {
    fontSize: 16,
    color: "white",
    paddingLeft: 16,
    paddingTop: 16,
  },
  input: {
    padding: 16,
    paddingLeft: 16,
    borderWidth: 2,
    borderColor: "orange",
    borderRadius: 400,
  },
  button: {
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
  },
  recuperacao: {
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
    fontSize: 10,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 35,
  },
  cadastro: {
    textAlign: "center",
    fontSize: 12,
    paddingTop: 50,
  },
});
