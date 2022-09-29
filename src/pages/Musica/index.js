import React, { useState, useEffect } from 'react'
import { Modal, FlatList, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { 
  Container, 
  Header, 
  HeaderLeft, 
  HeaderTitle, 
  HeaderButtonBack, 
  HeaderButtonSearch,
} from './styles'

import FabButton from '../../components/FabButton'
import ModalNewRoom from '../../components/MusicasChannelComponents/ModalNewRoom'
import ChatList from '../../components/MusicasChannelComponents/ChatList'
import SplashScreen from '../../components/Splash'

export default function Musica() {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const [user, setUser] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const [threads, setThreads] = useState([])
  const [loading, setLoading] = useState(true)
  const [updateScreen, setUpdateScreen] = useState(false)

  useEffect(() => {
    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null
    setUser(hasUser)
  }, [isFocused])

  useEffect(() => {
    let isActive = true
    function getChats() {
      firestore()
        .collection('MUSICAS_THREADS')
        .get()
        .then((snapshot) => {
          const threads = snapshot.docs.map((documentSnapshot) => {
            return {
              _id: documentSnapshot.id,
              name: '',
              ...documentSnapshot.data(),
            }
          })
          if (isActive) {
            setThreads(threads)
            setLoading(false)
          }
        })
    }
    getChats()
    return () => {
      isActive = false
    }

  }, [isFocused, updateScreen])

  function deleteRoom(ownerId, idRoom) {
    if (ownerId !== user?.uid) return
    Alert.alert(
      'Atencao!',
      'Voce tem certeza que deseja deletar essa música?',
      [
        {
          text: 'Cancelar',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => handleDeleteRoom(idRoom),
        },
      ],
    )
  }

  async function handleDeleteRoom(idRoom) {
    await firestore()
      .collection('MUSICAS_THREADS')
      .doc(idRoom)
      .delete()
    setUpdateScreen(!updateScreen)
  }

  if (loading) {
    return (
      <SplashScreen />
    )
  }

  return (
        <Container>
            <Header>
                <HeaderLeft>
                    <HeaderButtonBack onPress={() => navigation.navigate('Dashboard')}>
                        <MaterialIcons name='arrow-back' size={28} color='#171717' />
                    </HeaderButtonBack>
                    <HeaderTitle>Músicas</HeaderTitle>
                </HeaderLeft>
                <HeaderButtonSearch onPress={() => navigation.navigate('MusicasSearch')}>
                    <MaterialIcons name='search' size={28} color='#505050' />
                </HeaderButtonSearch>
            </Header>
            <FlatList
                style={{ marginTop: 5 }}
                data={threads}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ChatList
                        data={item}
                        deleteRoom={
                            () => deleteRoom(item.owner, item._id)
                        }
                        userStatus={user}
                    />
                )}
            />

            <FabButton setVisible={() => setModalVisible(true)} userStatus={user} />

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalNewRoom
                    setVisible={() => setModalVisible(false)}
                    setUpdateScreen={() => setUpdateScreen(!updateScreen)}
                />
            </Modal>
        </Container>
  )
}
