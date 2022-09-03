import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { launchImageLibrary } from 'react-native-image-picker';

import {
    Container,
    Header,
    ButtonBack,
    Title,
    ProfileArea,
    ProfileButton,
    ProfileImg,
    InfoBox,
    InfoText,
    Info,
    Button,
    ButtonText,
    Modal,
    ModalContainer,
    ModalButtonBack,
    ModalInput,
    ButtonModal,
    ButtonModalText,
} from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { AuthContext } from '../../contexts/auth'

export default function Profile() {

    const navigation = useNavigation();

    const { signOut, user, setUser, storageUser } = useContext(AuthContext);

    const [name, setName] = useState(user?.name)
    const [url, setUrl] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let isActive = true;

        async function loadAvatar() {
            try {
                if (isActive) {
                    let response = await storage().ref('users').child(user?.uid).getDownloadURL();
                    setUrl(response);
                }
            } catch (err) {
                console.log("NAO ENCONTRAMOS NENHUMA FOTO")
            }
        }

        loadAvatar();


        return () => isActive = false;
    }, [])

    async function handleSignOut() {
        await signOut();
    }

    async function updateProfile() {
        if (name === '') {
            return;
        }

        await firestore().collection('users')
            .doc(user?.uid)
            .update({
                name: name
            })

        let data = {
            uid: user.uid,
            name: name,
            email: user.email,
        }

        setUser(data);
        storageUser(data);
        setOpen(false);
    }


    const uploadFile = () => {
        const options = {
            noData: true,
            mediaType: 'photo'
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log("Cancelouu!");
            } else if (response.error) {
                console.log("Ops parece que deu algum erro")
            } else {
                uploadFileFirebase(response)
                    .then(() => {
                        console.log(url)
                    })
                setUrl(response.assets[0].uri)
            }
        })

    }

    const getFileLocalPath = (response) => {
        return response.assets[0].uri;
    }

    const uploadFileFirebase = async (response) => {
        const fileSource = getFileLocalPath(response);
        const storageRef = storage().ref('users').child(user?.uid);
        return await storageRef.putFile(fileSource)
    }

    return (
        <Container>
            <Header>
                <ButtonBack onPress={() => navigation.navigate('Dashboard')}>
                    <MaterialIcons name='arrow-back' size={28} color='#171717' />
                </ButtonBack>
                <Title>Editar Perfil</Title>
            </Header>
            <ProfileArea>
                {url ? (
                    <ProfileButton onPress={() => uploadFile()}>
                        <ProfileImg
                            source={{ uri: url }}
                        />
                    </ProfileButton>
                ) : (
                    <ProfileButton onPress={() => uploadFile()}>
                        <ProfileImg
                            source={require('../../../src/assets/profile.png')}
                        />
                    </ProfileButton>
                )}
                <InfoBox>
                    <Info onPress={() => setOpen(true)}>
                        <InfoText>Usuário : {user?.name}</InfoText>
                    </Info>
                </InfoBox>
                <InfoBox>
                    <Info>
                        <InfoText style={{ color: '#ccc' }}>Email : {user?.email}</InfoText>
                    </Info>
                </InfoBox>
                <Button onPress={handleSignOut}>
                    <ButtonText>Sair</ButtonText>
                </Button>
            </ProfileArea>
            <Modal visible={open} animationType="slide" transparent={true}>
                <ModalContainer behavior={Platform.OS === 'android' ? '' : 'padding'}>
                    <ModalButtonBack onPress={() => setOpen(false)}>
                        <MaterialIcons name='arrow-back' size={22} color='#171717' />
                    </ModalButtonBack>
                    <ModalInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <ButtonModal onPress={updateProfile}>
                        <ButtonModalText>Salvar</ButtonModalText>
                    </ButtonModal>
                </ModalContainer>
            </Modal>
        </Container>
    )
}