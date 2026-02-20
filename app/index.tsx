import React from "react";
import {
  Text,
  View,
  Image,
  TextInput
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
        <Text style={style.logoText}>Splash</Text>
      </View>
      <View style={style.boxMiddle}>
        <Text style={style.loginInput}>Usuário</Text>
        <TextInput style={style.boxLoginInput}></TextInput>
        <Text style={style.loginInput}>Senha</Text>
        <TextInput style={style.boxLoginInput}></TextInput>
      </View>
      <View style={style.boxBottom}>

      </View>
    </View>
  );
}