import React, { useState, useContext } from 'react';

import {
    Container,
    Title,
    Description,
    Inputs,
    Button,
    ButtonText,
    ChangeScreen,
    ChangeScreenText,
} from './styles';

import { Platform, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function Login() {
    const [login, setLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn, signUp, loadingAuth } = useContext(AuthContext);

    const navigation = useNavigation();

    function toggleLogin() {
        setLogin(!login)
        setName('')
        setEmail('')
        setPassword('')
    }

    async function handleSignIn() {
        if (email === '' || password === '') {
            Alert.alert("PREENCHA TODOS OS CAMPOS")
            return;
        }

        await signIn(email, password)
    }

    async function handleSignUp() {
        if (name === '' || email === '' || password === '') {
            Alert.alert("PREENCHA TODOS OS CAMPOS PARA CADASTRAR")
            return;
        }

        await signUp(email, password, name)
    }
    if (login) {
        return (
            <Container>
                <Title>Bem-Vindo!</Title>
                <Description>Por favor inicie com sua conta</Description>

                <KeyboardAvoidingView
                    behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1, alignItems: 'center', width: '100%' }}
                    keyboardVerticalOffset={80}
                >
                    <Inputs
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="E-mail"
                        placeholderTextColor="#C6C6CB"
                    />

                    <Inputs
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Senha"
                        placeholderTextColor="#C6C6CB"
                        secureTextEntry={true}
                    />

                    <Button onPress={handleSignIn}>
                        {loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <ButtonText>Entrar</ButtonText>
                        )}
                    </Button>

                    <ChangeScreen onPress={toggleLogin}>
                        <ChangeScreenText>Criar uma nova conta</ChangeScreenText>
                    </ChangeScreen>
                    <ChangeScreen onPress={() => navigation.navigate('Recover')}>
                        <ChangeScreenText>Esqueceu sua senha?</ChangeScreenText>
                    </ChangeScreen>
                </KeyboardAvoidingView>
            </Container>
        )
    }

    return (


        <Container>
            <Title>Crie uma nova conta</Title>
            <Description>Preencha tudo para continuar</Description>
            <Inputs
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Name"
                placeholderTextColor="#C6C6CB"
            />

            <Inputs
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                placeholderTextColor="#C6C6CB"
            />

            <Inputs
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                placeholderTextColor="#C6C6CB"
                secureTextEntry={true}
            />

            <Button onPress={handleSignUp}>
                <ButtonText>Criar Conta</ButtonText>
            </Button>

            <ChangeScreen onPress={toggleLogin}>
                <ChangeScreenText>Já possuo uma conta</ChangeScreenText>
            </ChangeScreen>
        </Container>
    )
}