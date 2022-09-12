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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);
  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');
  const { getEmail, setEmail } = useAsyncStorage('inputEmail');
  const { getSenha, setSenha } = useAsyncStorage('inputSenha');

  const validarLogin = async (email, senha) => {
    const bancoDadosSenha = await getSenha();
    const bancoDadosEmail = await getEmail();
    if (email === bancoDadosEmail && senha === bancoDadosSenha) {
      alert('Login valido');
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
          value={inputEmail}
          onChangeText={(value) => setInputEmail(value)}
        />
      </View>
      <Text style={styles.textSenha}>Senha</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputSenha}
          value={inputSenha}
          onChangeText={(value) => setInputSenha(value)}
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
        <TouchableOpacity
          onPress={() => {
            validarLogin(inputEmail, inputSenha);
          }}
          style={styles.button}
        >
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
