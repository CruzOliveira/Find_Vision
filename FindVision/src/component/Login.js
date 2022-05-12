import React from "react";
import { SafeAreaView, Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const Login = ({navigation}) =>{
    return(

        <SafeAreaView style={styles.conteinerPai}>
            <View style={styles.conteinerImg}>
                <Image source={require('../img/Logo.png')}
                style={styles.logo}/>
            </View>
            <View 
            style={styles.conteinerImputs}>
                <View style={styles.email}>
                    <Text style={styles.title}>Email</Text>
                    <TextInput style={styles.Input}/>
                </View>
                <View style={styles.senha}>
                    <Text style={styles.title}>Senha</Text>
                    <TextInput style={styles.Input}/>
                </View>
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

    conteinerImputs:{
        marginHorizontal: 85,
        marginTop:34,
        marginBottom:5,
        elevation: 20,
    },

    title:{
        color:'#BA872A',
        fontSize: 16,
        fontWeight: '700',
    },

    Input:{
        backgroundColor:'#E8E6E2',
        padding: 4,
        borderRadius: 5,
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
        marginBottom: 20,
        
    },
    senha:{
        marginBottom: 6,
    },



});