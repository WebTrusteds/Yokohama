import React, { useState } from 'react';
import {
    Container,
    Content,
    Title,
    Description,
    Input,
    Button,
    ButtonText
} from './styles';
import { HeaderBack } from './../../components/RecoverPassword/HeaderBack';

import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';

export default function RecoverPassword() {
    const [email, setEmail] = useState('')

    const navigation = useNavigation();

    async function handleForgetPassword() {
        if (email === '') {
            Alert.alert("Informe o email")
        }

        auth().sendPasswordResetEmail(email)
            .then(() => {
                navigation.navigate('RecoverRedirect')
            })
    }

    return (
        <Container>
            <HeaderBack />
            <Title>Recuperar Senha</Title>
            <Description>Insira o e-mail associado à sua conta e enviaremos um e-mail com instruções para redefirmos sua senha.</Description>
            <Content>
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="E-mail"
                    placeholderTextColor="#C6C6CB"
                />
                <Button onPress={handleForgetPassword}>
                    <ButtonText>Recuperar senha</ButtonText>
                </Button>
            </Content>
        </Container>
    )
}
