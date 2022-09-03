
import React, { useState, useEffect, useContext } from 'react';
import { Container, ContainerView, ContainerInput, MainContainerInput, TextInput, ButtonContainer } from './styles';
import {
    TouchableOpacity,
    StyleSheet,
    FlatList,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../contexts/auth';

import firestore from '@react-native-firebase/firestore';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ChannelMessage from '../../components/TextChannelComponents/ChannelMessageText';

import { HeaderBack } from '../../components/TextChannelComponents/HeaderBack';

export default function TextChannel({ route }) {

    const { thread } = route.params;
    const { userContent } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const user = auth().currentUser.toJSON();

    useEffect(() => {

        const unsubscribeListener = firestore().collection('TEXTINHOS_THREADS')
            .doc(thread._id)
            .collection('TEXTINHOS')
            .orderBy('createdAt', 'desc')
            .onSnapshot(querySnapshot => {
                const messages = querySnapshot.docs.map(doc => {
                    const firebaseData = doc.data();

                    const data = {
                        _id: doc.id,
                        text: '',
                        createdAt: firestore.FieldValue.serverTimestamp(),
                        ...firebaseData
                    }

                    if (!firebaseData.system) {
                        data.user = {
                            ...firebaseData.user,
                            name: userContent?.name
                        }
                    }

                    return data;

                })

                setMessages(messages)
            })

        return () => unsubscribeListener()

    }, [thread]);

    async function handleSend() {
        if (input === '') return;

        firestore()
            .collection('TEXTINHOS_THREADS')
            .doc(thread._id)
            .collection('TEXTINHOS')
            .add({
                text: input,
                createdAt: firestore.FieldValue.serverTimestamp(),
                user: {
                    _id: user.uid,
                    displayName: userContent.name
                }
            })

        setInput('');
    }

    return (
        <Container>
            <HeaderBack />
            <ContainerView>
                <FlatList
                    style={{ width: '100%' }}
                    data={messages}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <ChannelMessage data={item} />}
                    inverted={true}
                />
                <KeyboardAvoidingView
                    behavior={Platform.Os === 'ios' ? 'padding' : 'height'}
                    style={{ width: '100%' }}
                    keyboardVerticalOffset={100}
                >
                    <ContainerInput>
                        <MainContainerInput>
                            <TextInput
                                placeholder='Digite ...'
                                placeholderTextColor='#a9a9a9'
                                value={input}
                                onChangeText={(text) => setInput(text)}
                                multiline={true}
                                autoCorrect={false}
                            />
                        </MainContainerInput>
                        <TouchableOpacity onPress={handleSend}>
                            <ButtonContainer>
                                <MaterialIcons name='send' size={20} color='#f0f0f0' />
                            </ButtonContainer>
                        </TouchableOpacity>
                    </ContainerInput>
                </KeyboardAvoidingView>
            </ContainerView>
        </Container>
    );
}