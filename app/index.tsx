import { Button } from "@react-navigation/elements";
import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { style } from "./styles";
// import Logo from '../assets/logo.png'

export default function Login() {
  return (
    <View style={style.contanier}>
      <View style={style.boxTop}>
        {/* <Image 
          source={Logo}
        /> */}
        <Text style={style.logoText}>appH</Text>
      </View>
      <View style={style.boxMiddle}>
        <Text style={style.loginInput}>Usuário</Text>
        <TextInput style={style.boxLoginInput}></TextInput>
        <Text style={style.loginInput}>Senha</Text>
        <TextInput style={style.boxLoginInput}></TextInput>
      </View>
      <View style={style.boxBottom}>
        <TouchableOpacity style={style.enterBottom}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}