import React, { useState, useContext } from 'react';
import { Container, Picture, Title, NavBar } from './styles';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function ImageOpened({ route }) {
    const navigation = useNavigation();

    const { uri } = route.params;

    return (
        <Container>
            <Picture source={{ uri: uri }}/>
            <NavBar>
                <TouchableOpacity onPress={() => navigation.navigate('Galeria')}>
                    <MaterialIcons name='arrow-back' size={28} color='#f0f0f0' />
                </TouchableOpacity>
                <Title>Voltar</Title>
            </NavBar>
        </Container>
    )
}