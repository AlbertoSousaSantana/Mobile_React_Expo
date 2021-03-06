import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from "react-native";

import MyTextInput from '../../components/MyTextInput';
import { snService } from '../../services/sn.service';
import { TypeRoutes } from '../../routes';

import styles from './styles';
import { User } from '../../entities';

export default function SignUp() {

    const navigation = useNavigation<NavigationProp<TypeRoutes>>();

    React.useEffect(() => {
        navigation.setOptions({ title: 'Novo Usuário' });
    }, []);


   
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
   
    const [idade, setIdade] = React.useState('');
    const [endereco, setEndereco] = React.useState('');
   
    const [confirmar, setConfirmar] = React.useState('');

    async function save() {
        if (!name || !email || !password || !idade || !endereco) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
        if (password !== confirmar) {
            alert('A senha não confere!');
            return;
        }
        
        const user: User = {
            email: email.toLowerCase(),
            name : name, 
            address : endereco,
            age : idade,
            userPassword: password,
            
        };
        
        const token = await snService.createUser(user);
      
        try {
            if (token) {
                navigation.goBack();
            } else {
                alert('Usuário já existente!');
            }
        } catch (error) {
            console.error('Erro ao criar um novo usuário: ', error);
            alert('Ocorreu um erro não esperado!');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informe os dados do Usuário</Text>

            <MyTextInput title="Nome:" value={name} onChangeText={setName} />            
            <MyTextInput title="Email:" value={email} onChangeText={setEmail} />
            <MyTextInput title="Endereço:" value={endereco} onChangeText={setEndereco} />            
            <MyTextInput title="Idade:" value={idade} onChangeText={setIdade} />

            <MyTextInput title="Senha:" value={password} onChangeText={setPassword} secureTextEntry />
            <MyTextInput title="Confirmar senha:" value={confirmar} onChangeText={setConfirmar} secureTextEntry />

            <Button title="Cadastrar" onPress={save} />
        </View>
    );
}