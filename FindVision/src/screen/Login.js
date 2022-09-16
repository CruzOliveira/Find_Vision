import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {
      alert('Ops...E obrigatório preencher todas as informacoes!');
    } else {
      const emailUser = await AsyncStorage.getItem('@asyncStorage:emailUser');
      const passUser = await AsyncStorage.getItem('@asyncStorage:passUser');
      const nomeUser = await AsyncStorage.getItem('@asyncStorage:nomeUser');
      if (emailUser === email && passUser === password) {
        alert('Sucesso✔ - Usuário logado!');
      } else {
        alert('Erro❌ - Usuário incorreto!');
      }
    }
  };
  return (
    <SafeAreaView style={styles.conteinerPai}>
      <StatusBar backgroundColor="#FF9400" />
      <View style={styles.conteinerImg}>
        <Image source={require('../img/Logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.textEmail}>Email</Text>
      <View style={styles.inputAreaEmail}>
        <TextInput
          style={styles.inputEmail}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <Text style={styles.textSenha}>Senha</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputSenha}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidePass}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setHidePass(!hidePass)}
        >
          <Ionicons name="eye" color="#BBB5AA" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.link}>
        <TouchableOpacity onPress={() => navigation.replace('Cadastro')}>
          <Text style={styles.titleCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.titleEsqueci}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
          <Text style={styles.TextButton}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  conteinerPai: {
    flex: 1,
    backgroundColor: '#464237',
    fontFamily: 'Roboto',
  },
  inputAreaEmail: {
    width: '70%',
    backgroundColor: '#F9F8F6',
    height: 42,
    alignItems: 'center',
    marginHorizontal: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E6E2',
    elevation: 20,
    marginBottom: 20,
  },
  inputEmail: {
    width: '100%',
    height: 41,
    color: 'black',
    padding: 8,
  },
  inputArea: {
    flexDirection: 'row',
    width: '70%',
    backgroundColor: '#F9F8F6',
    height: 42,
    alignItems: 'center',
    marginHorizontal: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E6E2',
    elevation: 20,
  },
  inputSenha: {
    width: '85%',
    height: 41,
    color: 'black',
    padding: 8,
  },
  icon: {
    width: '15%',
    height: 41,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmail: {
    marginHorizontal: 60,
    fontSize: 16,
    color: '#BA872A',
    fontWeight: '700',
  },

  textSenha: {
    marginHorizontal: 60,
    fontSize: 16,
    color: '#BA872A',
    fontWeight: '700',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  TextButton: {
    backgroundColor: '#FF9400',
    paddingVertical: 20,
    paddingHorizontal: 76,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#B18739',
    elevation: 20,
  },

  conteinerImg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
    elevation: 20,
  },

  logo: {
    width: 192,
    height: 192,
  },

  titleCadastrar: {
    color: '#BA872A',
    fontSize: 16,
    fontWeight: '600',
  },
  titleEsqueci: {
    color: '#BA872A',
    fontSize: 16,
    marginLeft: 100,
    fontWeight: '600',
  },

  link: {
    flexDirection: 'row',
    marginHorizontal: 60,
    marginBottom: 3,
    marginTop: 10,
  },
});
