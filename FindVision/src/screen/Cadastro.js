import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';

const Cadastro = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [nacimento, setNacimento] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');

  const handleCreateUser = async () => {
    if (
      nome === '' ||
      email === '' ||
      password === '' ||
      cpf === '' ||
      nacimento === '' ||
      numero === '' ||
      cidade === ''
    ) {
      alert('Ops...E obrigatório preencher todas as informacoes!');
    } else {
      await AsyncStorage.setItem('@asyncStorage:nameUser', nome);
      await AsyncStorage.setItem('@asyncStorage:emailUser', email);
      await AsyncStorage.setItem('@asyncStorage:passUser', password);
      navigation.replace('Login');
    }
  };
  return (
    <SafeAreaView style={styles.conteinerPai}>
      <ScrollView>
        <StatusBar backgroundColor="#FF9400" />
        <Image
          style={styles.Logo}
          source={require('../img/LogoCadastro.png')}
        />
        <View style={styles.conteinerCadastro}>
          <Text style={styles.title}>Nome</Text>
          <View style={styles.areaInputNome}>
            <TextInput
              onChangeText={(text) => setNome(text)}
              style={styles.Input}
            />
          </View>
          <Text style={styles.title}>Email</Text>
          <View style={styles.areaInputEmail}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={styles.Input}
            />
          </View>
          <Text style={styles.title}>Senha</Text>
          <View style={styles.areaInputSenha}>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={hidePass}
              style={styles.InputSenha}
            />
            <TouchableOpacity
              onPress={() => setHidePass(!hidePass)}
              style={styles.icon}
            >
              <Ionicons name="eye" color="#BBB5AA" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.areaText}>
            <Text style={styles.textCPF}>CPF</Text>
            <Text style={styles.textNacimento}>D/NACIMENTO</Text>
          </View>
          <View style={styles.areaInputCPFNacimento}>
            <View style={styles.areaInputCPF}>
              <TextInput
                keyboardType="numeric"
                placeholder="000.000.000-00"
                style={styles.InputDuplo}
                onChangeText={(text) => setCpf(text)}
              />
            </View>

            <View style={styles.areaInputNacimento}>
              <TextInput
                keyboardType="numeric"
                placeholder="00/00/0000"
                style={styles.InputDuplo}
                onChangeText={(text) => setNacimento(text)}
              />
            </View>
          </View>

          <Text style={styles.title}>Numero</Text>
          <View style={styles.areaInputNumero}>
            <TextInput
              placeholder="(00)0000-0000"
              keyboardType="numeric"
              style={styles.Input}
              onChangeText={(text) => setNumero(text)}
            />
          </View>
          <Text style={styles.title}>Cidade</Text>
          <View style={styles.areaInputCidade}>
            <TextInput
              onChangeText={(text) => setCidade(text)}
              style={styles.Input}
            />
          </View>

          <View style={styles.areaButton}>
            <TouchableOpacity onPress={() => handleCreateUser()}>
              <Text style={styles.textButton}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Cadastro;
const styles = StyleSheet.create({
  conteinerPai: {
    flex: 1,
    backgroundColor: '#464237',
    fontFamily: 'Roboto',
  },

  conteinerCadastro: {
    backgroundColor: '#5F5B5B',
    marginHorizontal: 10,
    width: 370,
    height: 670,
    borderRadius: 4,
    elevation: 10,
    marginBottom: 30,
  },
  InputDuplo: {
    width: '100%',
    height: 41,
    color: 'black',
    fontSize: 16,
    padding: 8,
  },
  areaButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9400',
    height: 50,
    width: 177,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#B18739',
    elevation: 10,
    marginHorizontal: '25%',
    marginTop: 30,
  },
  textButton: {
    fontSize: 16,
    color: '#4A4747',
    fontWeight: '700',
  },

  Logo: {
    width: 195,
    height: 42,
    marginHorizontal: 20,
    marginTop: 55,
    marginBottom: 20,
  },

  areaCheckbox: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 15,
    elevation: 20,
  },

  areaInputNome: {
    width: '89%',
    backgroundColor: '#F9F8F6',
    height: 42,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E6E2',
    elevation: 20,
  },

  Input: {
    width: '100%',
    height: 41,
    color: 'black',
    fontSize: 16,
    padding: 8,
  },

  InputSenha: {
    width: '100%',
    height: 41,
    color: 'black',
    fontSize: 16,
    padding: 8,
  },

  areaInputEmail: {
    width: '89%',
    backgroundColor: '#F9F8F6',
    height: 42,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E6E2',
    elevation: 20,
  },

  areaInputSenha: {
    flexDirection: 'row',
    width: '89%',
    backgroundColor: '#F9F8F6',
    height: 42,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E6E2',
    elevation: 20,
  },

  areaInputCidade: {
    width: '89%',
    backgroundColor: '#F9F8F6',
    height: 42,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E6E2',
    elevation: 20,
  },

  areaInputNumero: {
    width: '89%',
    backgroundColor: '#F9F8F6',
    height: 42,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E6E2',
    elevation: 20,
  },

  areaInputCPFNacimento: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  areaText: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  areaInputCPF: {
    backgroundColor: '#F9F8F6',
    width: '46%',
    backgroundColor: '#F9F8F6',
    height: 42,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E6E2',
    elevation: 20,
  },

  areaInputNacimento: {
    backgroundColor: '#F9F8F6',
    marginLeft: 25,
    width: '46%',
    backgroundColor: '#F9F8F6',
    height: 42,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E8E6E2',
    elevation: 20,
  },

  icon: {
    width: '10%',
    padding: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 16,
    color: '#BA872A',
    fontWeight: '700',
  },
  textCheckbox: {
    marginTop: 7,
    fontSize: 16,
    color: '#BA872A',
    fontWeight: '700',
    elevation: 20,
  },
  textCPF: {
    marginTop: 20,
    fontSize: 16,
    color: '#BA872A',
    fontWeight: '700',
  },
  textNacimento: {
    marginTop: 20,
    marginLeft: 152,
    fontSize: 16,
    color: '#BA872A',
    fontWeight: '700',
  },
});
