import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback
}
    from 'react-native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function ModalNewPicture({ setVisible, setUpdateScreen }) {

    const [roomName, setRoomName] = useState('');

    const user = auth().currentUser.toJSON();

    function createRoom() {
        firestore()
            .collection('FLERTES_THREADS')
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
        <View style={styles.container}>

            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={styles.modal}></View>
            </TouchableWithoutFeedback>

            <View style={styles.modalContent}>
                <Text style={styles.title}>Criar um novo Flerte</Text>
                <TextInput
                    style={styles.input}
                    value={roomName}
                    onChangeText={(text) => setRoomName(text)}
                    placeholder="De um nome para seu flerte"
                    placeholderTextColor='#c1c1c1'
                />

                <TouchableOpacity style={styles.buttonCreate} onPress={createRoom}>
                    <Text style={styles.buttonText}>Criar Flerte</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={setVisible}
                    style={styles.backButton}
                >
                    <Text style={{ color: '#171717' }}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modal: {
        flex: 1,
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 15,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#171717',
    },
    input: {
        color: '#171717',
        borderRadius: 4,
        height: 45,
        backgroundColor: '#f0f0f0',
        marginVertical: 15,
        marginVertical: 15,
        fontSize: 16,
        paddingHorizontal: 5,
    },
    buttonCreate: {
        borderRadius: 4,
        backgroundColor: '#6F00EF',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#f0f0f0',
    },
    backButton: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})