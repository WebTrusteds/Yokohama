import React from 'react';

import { Header, HeaderText, HeaderButton } from './styles';

import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function HeaderBack() {
    const navigation = useNavigation();

    return (
        <Header>
            <HeaderButton onPress={() => navigation.navigate('Flertes')}>
                <MaterialIcons name='arrow-back' size={30} color='#171717' />
            </HeaderButton>
            <HeaderText>Voltar</HeaderText>
        </Header>
    )
}