import React from 'react';
import { Linking } from 'react-native';
import { HeaderBack } from './../../components/RecoverPassword/HeaderBack';

import {
    Container,
    EmailContent,
    Content,
    Title,
    Description,
    Button,
    ButtonText
} from './styles';

import LottieView from 'lottie-react-native';

export default function RecoverPasswordRedirect() {
    return (
        <Container>
            <HeaderBack />
            <EmailContent>
                <LottieView style={{ width: 220, height: 220 }} source={require('./../../assets/email.json')} resizeMode="contain" autoPlay={true} loop={true} />
            </EmailContent>
            <Title>Verifique seu Email</Title>
            <Description>Enviamos instruções para recuperação de senha em seu e-mail.</Description>
            <Content>
                <Button onPress={() => Linking.openURL('message:')}>
                    <ButtonText>Abrir Email</ButtonText>
                </Button>
            </Content>
        </Container>
    )
}
