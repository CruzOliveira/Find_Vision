import React, {useState} from "react";
import { TextInput, TouchableOpacity, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

export default function Cadastrar(){

    const [checked, setChecked] = React.useState(false);

    return(
    <View>
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
                /><Text style={styles.textTermo}>
                    Concordo com os Termos e Condições
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </View>
)}