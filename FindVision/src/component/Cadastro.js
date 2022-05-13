import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { TextInput, TouchableOpacity, View, Image, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Checkbox } from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons';
import { ScrollView } from "react-native-web";

export default function Cadastrar(){

    const [checked, setChecked] = React.useState(false);
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);
    return(
    <SafeAreaView style={styles.conteinerPai}>
        <StatusBar backgroundColor="#FF9400" />
        <ScrollView>
            <Image style={styles.Logo} source={require('../img/LogoCadastro.png')}
            />
            <View style={styles.conteinerCadastro}>
                <Text style={styles.title}>Nome</Text>
                <View style={styles.areaInputNome}>
                <TextInput style={styles.Input}/>
                </View>
                <Text style={styles.title}>Email</Text>
                <View style={styles.areaInputEmail}>
                <TextInput style={styles.Input}/>
                </View>
                <Text style={styles.title}>Senha</Text>
                <View style={styles.areaInputSenha}>
                <TextInput 
                value={input}
                onChangeText={(text) => setInput(text)}
                secureTextEntry={hidePass}
                style={styles.InputSenha}/>
                <TouchableOpacity
                onPress={() => setHidePass(!hidePass)}
                style={styles.icon}>
                    <Ionicons name="eye" color='#BBB5AA' size={25}/>
                </TouchableOpacity>
                </View>
                <View style={styles.areaText}>
                    <Text style={styles.textCPF}>CPF</Text>
                    <Text   style={styles.textNacimento}>D/NACIMENTO</Text>
                </View>
                <View style={styles.areaInputCPFNacimento}>
                    
                    <View style={styles.areaInputCPF}>
                        <TextInput style={styles.InputDuplo}/>
                    </View>
                    
                    <View style={styles.areaInputNacimento}>
                        <TextInput style={styles.InputDuplo}/>
                    </View>
                </View>

                <Text style={styles.title}>Numero</Text>
                <View style={styles.areaInputNumero}>
                <TextInput 
                placeholder="(00)0000-0000"
                style={styles.Input}/>
                </View>
                <Text style={styles.title}>Cidade</Text>
                <View style={styles.areaInputCidade}>
                <TextInput style={styles.Input}/>
                </View>

                <View>
                    <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                    setChecked2(!checked);
                    }}
                    /><Text>
                        Concordo com os Termos e Condições
                    </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
    </SafeAreaView>
)};
const styles = StyleSheet.create({
    conteinerPai:{
        flex: 1,
        backgroundColor:'#464237',
        fontFamily:'Roboto',
    },

    conteinerCadastro:{
        backgroundColor:'#5F5B5B',
        marginHorizontal: 20,
        width: 370,
        height: 500,
        borderRadius: 4,
        elevation: 10,
    },

    Logo:{
        width:195,
        height:42,
        marginHorizontal:20,
        marginTop:55,
        marginBottom:20,
    },

    areaInputNome:{
        width:'89%',
        backgroundColor:'#F9F8F6',
        height: 42,
        alignItems:'center',
        marginHorizontal:20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#E8E6E2',
        elevation: 20,
    },

    Input:{
        width:'96%',
        height: 41,
        color:'black',
        fontSize:16,
    },

    InputSenha:{
        width:'85%',
        height: 41,
        color:'black',
        fontSize:16,
        marginLeft:5,
    },

    areaInputEmail:{
        width:'89%',
        backgroundColor:'#F9F8F6',
        height: 42,
        alignItems:'center',
        marginHorizontal:20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#E8E6E2',
        elevation: 20,
    },

    areaInputSenha:{
        flexDirection:'row',
        width:'89%',
        backgroundColor:'#F9F8F6',
        height: 42,
        alignItems:'center',
        marginHorizontal:20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#E8E6E2',
        elevation: 20,
    },
    
    areaInputCidade:{
        width:'89%',
        backgroundColor:'#F9F8F6',
        height: 42,
        alignItems:'center',
        marginHorizontal:20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#E8E6E2',
        elevation: 20,
    },

    areaInputNumero:{
        width:'89%',
        backgroundColor:'#F9F8F6',
        height: 42,
        alignItems:'center',
        marginHorizontal:20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#E8E6E2',
        elevation: 20,
    },

    areaInputCPFNacimento:{
        flexDirection:'row',
        marginHorizontal:20,
    },

    areaText:{
        flexDirection:'row',
        marginHorizontal:20,

    },

    areaInputCPF:{
        backgroundColor:'#F9F8F6',
        width:'46%',
        backgroundColor:'#F9F8F6',
        height: 42,
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#E8E6E2',
        elevation: 20,
    },

    areaInputNacimento:{
        backgroundColor:'#F9F8F6',
        marginLeft: 25,
        width:'46%',
        backgroundColor:'#F9F8F6',
        height: 42,
        alignItems:'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#E8E6E2',
        elevation: 20,
    },

    icon:{
        width:'15%',
        height:40,
        justifyContent:'center',
        alignItems:'center',
    },

    title:{
        marginHorizontal:20,
        marginTop:20,
        fontSize: 16,
        color:'#BA872A',
        fontWeight: '700',
    },
    textCPF:{
        marginTop:20,
        fontSize:16,
        color:'#BA872A',
        fontWeight: '700',
    },
    textNacimento:{
        marginTop: 20,
        marginLeft:152,
        fontSize:16,
        color:'#BA872A',
        fontWeight: '700',
    },
    




});