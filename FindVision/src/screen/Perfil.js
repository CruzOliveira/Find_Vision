import React from 'react';
import { SafeAreaView, View } from 'react-native';

const Perfil = (navigation) => {
  <SafeAreaView>
    <View>
      <Image source={require('../img/Logo.png')} />
      <View>
        <Image source={require('../img/Logo.png')} />
        <Text>Nome: </Text>
        <Text>Email: </Text>
        <Text>Senha: </Text>
        <Text>CPF: </Text>
        <Text>Telefone: </Text>
        <Text>Cidade: </Text>
        <Text>Data de nacimento: </Text>
      </View>
    </View>
  </SafeAreaView>;
};
