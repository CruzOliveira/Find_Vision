import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login() {
  const [display, setDisplay] = useState('none');
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin] = useState(null);

  //Envio do formulário de login
  async function sendForm() {
    let response = await fetch('http://192.168.0.102:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user,
        password: password,
      }),
    });
    let json = await response.json();
    if (json === 'error') {
      setDisplay('flex');
      setTimeout(() => {
        setDisplay('none');
      }, 5000);
      await AsyncStorage.clear();
    } else {
      await AsyncStorage.setItem('userData', JSON.stringify(json));
      navigation.navigate('AreaRestrita');
    }
  }
  return (
    <KeyboardAvoidingView style={[css.container, css.darkbg]}>
      <View style={css.login__logomarca}>
        <Image source={require('../assets/img/logomarca.png')} />
      </View>

      <View>
        <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
      </View>

      <View style={css.login__form}>
        <TextInput
          style={css.login__input}
          placeholder="Usuário:"
          onChangeText={(text) => setUser(text)}
        />
        <TextInput
          style={css.login__input}
          placeholder="Senha:"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={css.login__button} onPress={() => sendForm()}>
          <Text style={css.login__buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const css = StyleSheet.create({
  darkbg: {
    backgroundColor: '#333',
  },
  login__logomarca: {
    marginBottom: 10,
  },
  login__msg: (text = 'none') => ({
    fontWeight: 'bold',
    fontSize: 22,
    color: 'red',
    marginBottom: 15,
    display: text,
  }),
  login__form: {
    width: '80%',
  },
  login__input: {
    backgroundColor: '#fff',
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
  },
  login__button: {
    padding: 12,
    backgroundColor: '#F58634',
    alignSelf: 'center',
    borderRadius: 5,
  },
  login__buttonText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#333',
  },
});
