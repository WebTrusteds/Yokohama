import React from 'react';
import { Container, Content, Title, Description, Button, ButtonText, Background } from './styles';
import { useNavigation } from '@react-navigation/native';

import Welcome from '../../assets/Welcome.png';

export default function Home() {
    const navigation = useNavigation();

    return (
        <Container>
            <Background source={Welcome} resizeMode="cover">
                <Content>
                    <Title>atami beta</Title>
                    <Description>Um cantinho virtual, com sua pessoa especial, venha se divertir e eternizar todo seu carinho</Description>
                    <Button onPress={() => navigation.navigate('Login')}>
                        <ButtonText>Iniciar</ButtonText>
                    </Button>
                </Content>
            </Background>
        </Container>
    );
}