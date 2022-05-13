import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { TextInput, TouchableOpacity, View, Image, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Checkbox } from 'react-native-paper'

export default function Cadastrar(){

    const [checked, setChecked] = React.useState(false);

    return(
    <SafeAreaView style={styles.conteinerPai}>
         <StatusBar backgroundColor="#FF9400" />
        <Image source={require('../img/LogoCadastro.png')}
        />
        <View>

            <Text>Nome</Text>
            <TextInput/>
            <Text>Email</Text>
            <TextInput/>
            <Text>Senha</Text>
            <TextInput/>

            <View>
                <Text>CPF</Text>
                <TextInput/>
                <Text>D/NACIMENTO</Text>
                <TextInput/>
            </View>

            <Text>Numero</Text>
            <TextInput/>
            <Text>Cidade</Text>
            <TextInput/>

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
    </SafeAreaView>
)};
const styles = StyleSheet.create({
    conteinerPai:{
        flex: 1,
        backgroundColor:'#464237',
        fontFamily:'Roboto',
    },



});