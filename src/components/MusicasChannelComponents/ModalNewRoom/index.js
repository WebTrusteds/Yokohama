import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import {
    Container,
    Modal,
    ModalContent,
    Title,
    Input,
    ButtonCreate,
    ButtonText,
    BackButton,
} from './styles';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function ModalNewRoom({ setVisible, setUpdateScreen }) {

    const [roomName, setRoomName] = useState('');

    const user = auth().currentUser.toJSON();

    function createRoom() {
        firestore()
            .collection('MUSICAS_THREADS')
            .add({
                name: roomName,
                owner: user.uid,
            })
            .then(() => {
                setVisible();
                setUpdateScreen();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <Container>

            <TouchableWithoutFeedback onPress={setVisible}>
                <Modal></Modal>
            </TouchableWithoutFeedback>

            <ModalContent>
                <Title>Criar uma nova Música</Title>
                <Input
                    value={roomName}
                    onChangeText={(text) => setRoomName(text)}
                    placeholder="De um nome para sua música"
                    placeholderTextColor='#c1c1c1'
                />

                <ButtonCreate onPress={createRoom}>
                    <ButtonText>Criar Música</ButtonText>
                </ButtonCreate>

                <BackButton onPress={setVisible}>
                    <Text style={{ color: '#f0f0f0' }}>Voltar</Text>
                </BackButton>
            </ModalContent>
        </Container>
    )
}