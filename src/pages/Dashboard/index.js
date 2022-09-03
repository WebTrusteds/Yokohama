import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { Container, DashBoardPanel, IndroductionText, BooksContainer, Button, ButtonText } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';

export default function Dashboard() {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Header />
            <DashBoardPanel>
                <IndroductionText>Olá,</IndroductionText>
                <IndroductionText>{user?.name}</IndroductionText>
                <BooksContainer>
                    <Button onPress={() => navigation.navigate('Textos')}>
                        <MaterialIcons name='menu-book' size={50} color='#F0F0F0' />
                        <ButtonText>Textos</ButtonText>
                    </Button>
                    <Button onPress={() => navigation.navigate('Galeria')}>
                        <MaterialIcons name='collections' size={50} color='#F0F0F0' />
                        <ButtonText>Galeria</ButtonText>
                    </Button>
                    <Button onPress={() => navigation.navigate('Flertes')}>
                        <MaterialIcons name='list-alt' size={50} color='#F0F0F0' />
                        <ButtonText>Flertes</ButtonText>
                    </Button>
                    <Button onPress={() => navigation.navigate('Musicas')}>
                        <MaterialIcons name='library-music' size={50} color='#F0F0F0' />
                        <ButtonText>Músicas</ButtonText>
                    </Button>
                </BooksContainer>
            </DashBoardPanel>
        </Container>
    )
}