import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Login = ({navigation}) =>{
    return(

        <SafeAreaView style={styles.conteinerPai}>
            <StatusBar backgroundColor="#FF9400" />
            <View style={styles.conteinerImg}>
                <Image source={require('../img/Logo.png')}
                style={styles.logo}/>
            </View>

            <View style={styles.link}>
                <TouchableOpacity
                onPress={ () => navigation.replace('Cadastrar')}
                >
                    <Text style={styles.titleCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.titleEsqueci}>Esqueci a senha</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.TextButton}>ENTRAR</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
)};
export default Login;

const styles = StyleSheet.create({

    conteinerPai:{
        flex: 1,
        backgroundColor:'#464237',
        fontFamily:'Roboto',

    },
    area:{
    },
    

    button:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 30,
    },

    TextButton:{
        backgroundColor:'#FF9400',
        paddingVertical:20,
        paddingHorizontal:76,
        color:'#000000',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 5,
        borderWidth: 2,
        borderColor:'#B18739',
    },

    conteinerImg:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:110,
        elevation: 20,
    },

    logo:{
        width:192,
        height:192,
    },

    titleCadastrar:{
        color:'#BA872A',
        textDecorationLine:'underline',
        fontSize: 16,
        fontWeight: '600',
    },
    titleEsqueci:{
        color:'#BA872A',
        textDecorationLine:'underline',
        fontSize: 16,
        marginHorizontal:55,
        fontWeight: '600',
        
    },

    link:{
        flexDirection:'row',
        marginHorizontal: 85,
        marginBottom:3,
    },

    email:{
    
    },
    senha:{
    },



});