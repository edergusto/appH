//import { Button } from "@react-navigation/elements";
import { style } from "@/constants/styles";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Toast from 'react-native-toast-message';

// import Logo from '../assets/logo.png'

//npm install 'react-native-toast-message'
//Toast.show({type:'success', text1:'Teste de Login', text2:'Login efetuado com sucesso!'})

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function validarLogin() {
    if (usuario === 'admin') {
      // alert('Login autorizado');
      // console.log(200);
      Toast.show({
        type: 'success',
        text1: 'Seja bem-vindo ' + usuario + '!'
      })
    } else if (usuario === ""){
      Toast.show({
        type: 'info',
        text1: 'Usuário vázio!',
        text2: 'Preencha o campo usuário.'
      })
    }
    else (
      Toast.show({
        type: 'error',
        text1: 'Usuário negado!',
        text2: 'Contate o suporte.'
      })
    )
  }

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
        <TextInput style={style.boxLoginInput} onChangeText={setUsuario}></TextInput>
        <Text style={style.loginInput}>Senha</Text>
        <TextInput style={style.boxLoginInput} onChangeText={setSenha} secureTextEntry></TextInput>
      </View>
      <Toast/>
      <View style={style.boxBottom}>
        <TouchableOpacity style={style.enterBottom} onPress={validarLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}