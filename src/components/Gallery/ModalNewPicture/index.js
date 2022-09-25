import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { 
  Container, 
  ModalButton, 
  Modal, 
  ModalContent,
  Title,
  Input,
  ButtonCreate,
  ButtonText,
  BackButton,
} from './styles'

export default function ModalNewPicture({ setVisible, setUpdateScreen }) {
  const [roomName, setRoomName] = useState('')
  const user = auth().currentUser.toJSON()

  function createRoom() {
    firestore()
      .collection('FLERTES_THREADS')
      .add({
        name: roomName,
        owner: user.uid,
      })
      .then(() => {
        setVisible()
        setUpdateScreen()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
        <Container>
            <ModalButton>
                <Modal></Modal>
            </ModalButton>

            <ModalContent>
                <Title>Criar um novo Flerte</Title>
                <Input
                    value={roomName}
                    onChangeText={(text) => setRoomName(text)}
                    placeholder="De um nome para seu flerte"
                    placeholderTextColor='#c1c1c1'
                />

                <ButtonCreate onPress={createRoom}>
                    <Text>Criar Flerte</Text>
                </ButtonCreate>

                <BackButton onPress={setVisible}>
                    <ButtonText style={{ color: '#171717' }}>Voltar</ButtonText>
                </BackButton>
            </ModalContent>
        </Container>
  )
}
